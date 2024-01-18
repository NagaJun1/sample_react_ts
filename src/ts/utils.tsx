import { ReactNode } from "react";

/**
 * tr,td 要素を配列で生成
 * @param values 要素に設定する値
 * @returns {@link ReactNode}
 */
export const trInTable = (values: string[]): ReactNode => {
  let tds: ReactNode[] = [];

  values.forEach((val: string, index: number) => {
    tds.push(<td key={index}>{val}</td>);
  });

  return <tr>{tds}</tr>;
};

// overload する場合は、引数にパターンを持たせて、内部で分岐する様な書き方が必要
// Java や C# だと、メソッド名が同じで引数違いなら、overload できるが、
// typescript では、同じことはできない。

export const tdsInTr = (vals: ({ val: string, col?: number })[]): ReactNode => {

  let tds: ReactNode[] = [];
  vals.forEach((data: ({ val: string, col?: number }), index: number) => {
    tds.push(
      <td key={index} colSpan={data.col !== undefined ? data.col : 1}>{data.val}</td>);
  });

  return <tr>{tds}</tr>;
}
