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
            inputValueValidate: () => boolean;
            checkStatus: (status: string) => void
        };
        //清空輸入框
        if (type == 'clearInput') {
            console.log("1", fieldRef)
            childComponent.clearInput();
        }

        //驗證輸入框
        else if (type == "inputValueValidate") {
            return childComponent.inputValueValidate();
        }

        //檢查輸入框狀態
        else if (type = "checkInpustStatus") {
            console.log("fieldRef", fieldRef)
            childComponent.checkStatus('focus');
        }
    }


    /**
     * 程式碼防抖
     * @param {func} 傳入的方法
     * @param {delay} 要延遲的時間
     */
    debounce(func: Function, delay: number) {
        let timeoutId: ReturnType<typeof setTimeout>;
        let self = this
        //...args剩餘參數法就算參數也不會出現錯誤
        return function (...args: any) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(self,args);
            }, delay);
        };
    }


    throttle(func: Function, delay: number, maxClicks: number) {
        let timeoutId: ReturnType<typeof setTimeout> | null = null;
        let clickCount = 0;
        let self = this;
      
        function resetClickCount() {
          clickCount = 0;
        }
      
        return function (...args: any) {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
      
          if (clickCount < maxClicks) {
            clickCount++;
            if (clickCount >= maxClicks) {
              func.apply(self, args);
              resetClickCount();
              return;
            }
      
            timeoutId = setTimeout(() => {
              func.apply(self, args);
              resetClickCount();
            }, delay);
          }
        };
      }
}
