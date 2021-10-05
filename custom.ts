
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="" block="スクロール"
namespace custom {
    /**
     * TODO: describe your function here
     */
    //% block
    export function scroll_speed(t:string,s:number): void {
        // Add code here
        basic.showString(t,s)
    }
}
