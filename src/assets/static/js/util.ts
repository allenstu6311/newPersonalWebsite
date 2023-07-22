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
        const childComponent = fieldRef as Vue & {
            clearInput: () => void;
            inputValueValidate:()=>boolean;
            checkStatus:(status:string)=>void
        };
        //清空輸入框
        if (type == 'clearInput') {
            console.log("1",fieldRef)
            childComponent.clearInput();
        }

        //驗證輸入框
        else if(type == "inputValueValidate"){
           return childComponent.inputValueValidate();
        }

        //檢查輸入框狀態
        else if(type = "checkInpustStatus"){
            console.log("fieldRef",fieldRef)
            childComponent.checkStatus('focus');
        }
    }
}
