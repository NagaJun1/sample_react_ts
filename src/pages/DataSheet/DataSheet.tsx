import React from "react";
import { AgGridReact } from "ag-grid-react";
import {
    type ColDef, ClientSideRowModelModule, ModuleRegistry, TextEditorModule,
    NumberEditorModule, ValidationModule, DateEditorModule, RowSelectionModule,
    SelectEditorModule, RowStyleModule,
} from "ag-grid-community";

/** 編集可能なテーブル表示コンポーネント */
export const DataSheet = () => {
    const [rowData] = React.useState(getData()); // テーブル上の値変更を可能にするために必要
    const [selectedIds, setSelectedIds] = React.useState<number[]>([])
    const [newValueList, setNewValueList] = React.useState<NewValues<TableData>[]>([]);

    // テーブル表示、
    ModuleRegistry.registerModules([
        ClientSideRowModelModule,
        NumberEditorModule, // number テキスト編集を有効にするための Module
        TextEditorModule, // string テキスト編集を有効にするための Module
        DateEditorModule, // Date 型の編集
        RowSelectionModule, // チェックボックスで行を選択
        SelectEditorModule, // select で値を変更できる様にする
        RowStyleModule, // 行のスタイル変更を可能にする
        ValidationModule, // Module のチェック
    ]);

    return (
        <>
            <div style={{ height: 500 }}>
                <AgGridReact<TableData>
                    columnDefs={columns}
                    rowData={rowData}
                    getRowStyle={(e) => ({
                        // 変更された行の色を変更する
                        background: newValueList.find(x => x.id === e.data?.id)
                            ? "#ffefd5"
                            : "white",
                    })}
                    onCellValueChanged={(e) => {
                        // セルの編集イベント
                        const entity = {
                            field: e.colDef.field,
                            newValue: e.newValue,
                            id: e.data.id,
                        }
                        setNewValueList(pre => [...pre, entity])
                    }}
                    gridOptions={{ rowSelection: { mode: 'multiRow' } }} // 行をチェックボックスで選択できる様にする
                    onSelectionChanged={(e) => {
                        // 選択中の ID の取得
                        setSelectedIds(e.api.getSelectedRows().map(x => x.id))
                    }}
                />
                <div className="m-2 px-4 py-1 rounded w-fit bg-sky-100">
                    選択中：{selectedIds.join(',')}
                </div>
                <div className="m-2 px-3 rounded w-fit bg-sky-100">
                    {newValueList.map((x) => (
                        <div key={x.id} className="flex">
                            <div className="w-20">ID：{x.id}</div>
                            <div className="w-[200px]">フィールド：{x.field}</div>
                            <div className="pr-2">変更後の値：{String(x.newValue ?? '')}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

const LanguageValues = ['English', 'Spanish', 'French', 'Portuguese', '(other)']

type TableData = {
    id: number;
    language: string;
    a: string;
    b: number;
    createAt: Date
}

/** 列定義 */
const columns: ColDef<TableData>[] = [{
    // 編集不可なセル
    headerName: "ID",
    field: "id",
    width: 80,
}, {
    headerName: "言語",
    field: "language",
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: {
        values: LanguageValues,
    },
    editable: true, width: 150,
}, {
    headerName: "列A",
    field: "a",
    editable: true, width: 100,
}, {
    headerName: "列B",
    field: "b",
    editable: true, width: 100,
}, {
    headerName: "作成日",
    field: "createAt",
    width: 150,
    editable: true,
}, {
    headerName: "ボタン",
    field: "a",
    cellRenderer: () => (
        <button
            className="rounded my-1 px-2 bg-gray-200"
            type="button" onClick={() => alert('click')}
        >
            button
        </button>
    ), width: 100,
}];

/** テーブルに表示するデータ */
const getData = () => {
    // サンプルデータ
    return [60, 45, 20, 50, 30].map((val, index) => (
        {
            id: index + 1,
            language: LanguageValues[index % 4],
            a: `test-${val}`,
            b: val * 1.2,
            createAt: new Date(`2024/12/${index + 1}`)
        }
    ));
}

/** 変更された値一覧 */
type NewValues<Data> = {
    id: number;
    field?: keyof Data;
    newValue?: string | number | Date;
}