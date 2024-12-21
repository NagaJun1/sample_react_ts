import { AgGridReact } from "ag-grid-react";
import { ColDef, ClientSideRowModelModule, ModuleRegistry, TextEditorModule, NumberEditorModule, CheckboxEditorModule, ValidationModule } from "ag-grid-community";

/** 編集可能なテーブル表示コンポーネント */
export const DataSheet = () => {
    // テーブル表示、
    ModuleRegistry.registerModules([
        ClientSideRowModelModule,
        NumberEditorModule,
        TextEditorModule,
        CheckboxEditorModule,
        ValidationModule /* Development Only */,
    ]);

    return (
        <>
            <div>編集可能なテーブル</div>
            <div style={{ height: 500 }}>
                <AgGridReact
                    rowSelection={'multiple'}
                    columnDefs={columns}
                    rowData={getData()}
                    onCellValueChanged={(e) => {
                        // セルの編集イベント
                        console.log(e)
                    }}
                />
            </div>
        </>
    );
}

/** 列定義 */
const columns: ColDef[] = [{
    // 編集不可なセル
    headerName: "ID",
    field: "id",
    width: 80,
}, {
    headerName: "ボタン",
    field: "a",
    cellRenderer: () => (
        <button
            style={{ background: 'lightgray', padding: 8 }}
            type="button" onClick={() => alert('click')}
        >
            button
        </button>
    )
}, {
    headerName: "チェックボックス",
    field: "check",
    cellEditor: "agCheckboxCellEditor",
    editable: true,
}, {
    headerName: "列A",
    field: "a",
    editable: true
}, {
    headerName: "列B",
    field: "b",
    editable: true
}, {
    headerName: "作成日",
    field: "createAt",
    width: 250,
    editable: true
}];

/** テーブルに表示するデータ */
const getData = () => {
    // サンプルデータ
    return [60, 45, 20, 50, 30].map((val, index) => (
        {
            id: index + 1,
            a: val,
            b: val * 1.2,
            check: !!(index % 2),
            createAt: `2024/12/${index + 1}`
        }
    ));
}
