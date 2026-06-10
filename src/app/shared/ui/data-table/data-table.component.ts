import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonIntent } from '../button/button.component';
import { AppEmptyStateComponent } from '../empty-state/empty-state.component';
import { AppErrorStateComponent } from '../error-state/error-state.component';
import { AppIconButtonComponent } from '../icon-button/icon-button.component';
import { AppStatusBadgeComponent } from '../status-badge/status-badge.component';

export interface DataTableColumn {
  field: string;
  header: string;
  align?: 'left' | 'center' | 'right';
  type?: 'text' | 'status';
  sortable?: boolean;
  width?: string;
  nowrap?: boolean;
  hideBelow?: 'sm' | 'md' | 'lg';
  formatter?: (row: unknown) => string;
}

export interface DataTableAction {
  id: string;
  label: string;
  icon: string;
  intent?: ButtonIntent;
  visible?: (row: unknown) => boolean;
  disabled?: (row: unknown) => boolean;
}

export interface DataTableActionEvent {
  action: DataTableAction;
  row: unknown;
}

export interface DataTablePageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

export interface DataTableSortEvent {
  field: string;
  order: 1 | -1;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [TableModule, AppEmptyStateComponent, AppErrorStateComponent, AppIconButtonComponent, AppStatusBadgeComponent],
  template: `
    @if (errorMessage()) {
      <div class="fast-panel">
        <app-error-state [message]="errorMessage()" [retryable]="false" />
      </div>
    } @else {
      <p-table
        styleClass="app-data-table"
        [value]="rows()"
        [loading]="loading()"
        [paginator]="paginator()"
        [rows]="pageSize()"
        [first]="first()"
        [totalRecords]="totalRecords()"
        [rowsPerPageOptions]="pageSizeOptions()"
        [size]="size()"
        [tableStyle]="{ 'min-width': minTableWidth() }"
        [rowHover]="true"
        [showCurrentPageReport]="paginator()"
        [currentPageReportTemplate]="pageReportTemplate()"
        [alwaysShowPaginator]="false"
        [responsiveLayout]="'scroll'"
        [sortField]="sortField()"
        [sortOrder]="sortOrder()"
        [dataKey]="dataKey()"
        (onPage)="pageChanged.emit(toPageEvent($any($event)))"
        (onSort)="sortChanged.emit(toSortEvent($any($event)))"
      >
        <ng-template pTemplate="caption">
          @if (caption()) {
            <div class="text-sm font-medium text-color">{{ caption() }}</div>
          }
        </ng-template>

        <ng-template pTemplate="header">
          <tr>
            @if (showRowNumbers()) {
              <th class="w-12 whitespace-nowrap text-right">#</th>
            }
            @for (column of columns(); track column.field) {
              @if (column.sortable) {
                <th [class]="columnClass(column)" [style.width]="column.width" [pSortableColumn]="column.field">
                  <span class="inline-flex items-center gap-2">
                    {{ column.header }}
                    <p-sortIcon [field]="column.field" />
                  </span>
                </th>
              } @else {
                <th [class]="columnClass(column)" [style.width]="column.width">{{ column.header }}</th>
              }
            }
            @if (actions().length) {
              <th class="w-0 whitespace-nowrap text-right">Actions</th>
            }
          </tr>
        </ng-template>

        <ng-template pTemplate="body" let-row let-rowIndex="rowIndex">
          <tr class="cursor-pointer" (click)="rowClicked.emit(row)">
            @if (showRowNumbers()) {
              <td class="whitespace-nowrap text-right text-muted-color">{{ rowNumber(rowIndex) }}</td>
            }
            @for (column of columns(); track column.field) {
              <td [class]="columnClass(column)">
                @if (column.type === 'status') {
                  <app-status-badge [value]="cell(row, column)" />
                } @else {
                  <span class="fast-table-cell-text" [title]="cell(row, column)">{{ cell(row, column) }}</span>
                }
              </td>
            }
            @if (actions().length) {
              <td class="whitespace-nowrap text-right">
                <span class="inline-flex items-center justify-end gap-1" (click)="$event.stopPropagation()">
                  @for (action of visibleActions(row); track action.id) {
                    <app-icon-button
                      [label]="action.label"
                      [icon]="action.icon"
                      [intent]="action.intent ?? 'ghost'"
                      [disabled]="isActionDisabled(row, action)"
                      (clicked)="actionTriggered.emit({ action, row })"
                    />
                  }
                </span>
              </td>
            }
          </tr>
        </ng-template>

        <ng-template pTemplate="emptymessage">
          <tr>
            <td [attr.colspan]="colspan()">
              <app-empty-state [title]="emptyTitle()" [message]="emptyMessage()" />
            </td>
          </tr>
        </ng-template>
      </p-table>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppDataTableComponent {
  rows = input.required<unknown[]>();
  columns = input.required<DataTableColumn[]>();
  actions = input<DataTableAction[]>([]);
  loading = input(false);
  errorMessage = input('');
  emptyTitle = input('No records found');
  emptyMessage = input<string>();
  caption = input('');
  paginator = input(true);
  showRowNumbers = input(true);
  first = input(0);
  pageSize = input(10);
  pageSizeOptions = input<number[]>([5, 10, 20, 50]);
  totalRecordsInput = input<number | null>(null, { alias: 'totalRecords' });
  pageReportTemplate = input('Showing {first} to {last} of {totalRecords}');
  size = input<'small' | 'large'>('small');
  minTableWidth = input('56rem');
  dataKey = input('id');
  sortField = input<string | undefined>(undefined);
  sortOrder = input<1 | -1>(1);
  rowClicked = output<unknown>();
  actionTriggered = output<DataTableActionEvent>();
  pageChanged = output<DataTablePageEvent>();
  sortChanged = output<DataTableSortEvent>();

  totalRecords = computed(() => this.totalRecordsInput() ?? this.rows().length);
  colspan = computed(() => this.columns().length + (this.showRowNumbers() ? 1 : 0) + (this.actions().length ? 1 : 0));

  rowNumber(rowIndex: number) {
    return this.first() + rowIndex + 1;
  }

  cell(row: unknown, column: DataTableColumn): string {
    if (column.formatter) {
      return column.formatter(row);
    }

    if (typeof row !== 'object' || row === null) {
      return '';
    }

    const value = (row as Record<string, unknown>)[column.field];

    if (value instanceof Date) {
      return value.toLocaleDateString();
    }

    return value == null ? '' : String(value);
  }

  visibleActions(row: unknown) {
    return this.actions().filter((action) => !action.visible || action.visible(row));
  }

  isActionDisabled(row: unknown, action: DataTableAction) {
    return action.disabled ? action.disabled(row) : false;
  }

  alignmentClass(column: DataTableColumn) {
    if (column.align === 'center') return 'text-center';
    if (column.align === 'right') return 'text-right';
    return 'text-left';
  }

  columnClass(column: DataTableColumn) {
    return [
      this.alignmentClass(column),
      column.nowrap ? 'whitespace-nowrap' : '',
      column.hideBelow ? `fast-table-hide-${column.hideBelow}` : '',
    ]
      .filter(Boolean)
      .join(' ');
  }

  toPageEvent(event: { first?: number; rows?: number; page?: number; pageCount?: number }): DataTablePageEvent {
    return {
      first: event.first ?? 0,
      rows: event.rows ?? this.pageSize(),
      page: event.page ?? 0,
      pageCount: event.pageCount ?? 1,
    };
  }

  toSortEvent(event: { field?: string | string[]; order?: number }): DataTableSortEvent {
    const field = Array.isArray(event.field) ? (event.field[0] ?? '') : (event.field ?? '');

    return {
      field,
      order: event.order === -1 ? -1 : 1,
    };
  }
}
