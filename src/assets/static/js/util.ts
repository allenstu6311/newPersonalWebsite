import Component from "vue-class-component";
import Vue from "vue";


@Component
export default class SharedMixin extends Vue {
    /**
 * 調用子層方法
 * @param {fieldRef} 傳入$refs物件
 * @param {type} 指定執行的方法
 */

    getChildComponent<T = Element | Vue | Element[] | Vue[]>(fieldRef: T, type: string) {
        console.log("field", fieldRef)
        const childComponent = fieldRef as Vue & {
            clearInput: () => void;
        };
        //清空輸入框
        if (type == 'clearInput') {
            childComponent.clearInput();
        }
    }
}
