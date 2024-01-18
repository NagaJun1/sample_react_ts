import { ReactNode } from "react";

export const TrInTable = ({ td1, td2 }: any): ReactNode => <>{
    <tr>
        <td>{td1}</td>
        <td>{td2}</td>
    </tr>
}</>;

/** <tr>・<td> 要素を配列で生成 */
export const trInTable = (values: Td[]): ReactNode => {
    let tds: ReactNode[] = [];

    values.forEach((td: Td) => {
        tds.push(td.getNode());
    });

    return <><tr>{tds}</tr></>;
};

/** <td> 処理用クラス */
export class Td {
    /** 値 */
    value: string;

    /** rowSpan */
    rowspan: number;

    /** colSpan */
    colspan: number;

    /**
     * コンストラクタ
     * @param val td の値
     * @param row null -> 1 ：(オプション引数)
     * @param col null -> 1 ：(オプション引数)
     */
    constructor(val: string, row?: number, col?: number) {
        this.value = val;

        if (row === undefined) {
            row = 1;
        }
        this.rowspan = row;

        if (col === undefined) {
            col = 1;
        }
        this.colspan = col;
    }

    /** td: {@link ReactNode}  として取得 */
    getNode(): ReactNode {
        return (<td key={this.value} rowSpan={this.rowspan} colSpan={this.colspan}>
            {this.value}
        </td>);
    }
}