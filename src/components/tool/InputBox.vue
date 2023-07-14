<template>
    <b-input-group :prepend="label + ':'" class="mt-3 ">
        <b-form-input v-model="inputValue" @change="sendValue"></b-form-input>
    </b-input-group>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Vue from "vue";


@Component({
    props: {
        label: String,
    }
})
export default class InputBox extends Vue {
    @Prop(String) label!: string;
    public inputValue:string = ''

    sendValue(){
        this.$emit("inputBoxOnChange",this.inputValue)
    }

    mounted() {
        this.$emit("inputBoxOnChange",this.inputValue)
    }

}
</script>
<style scoped>
.input-group {
    display: block;
}

.input-group-text {
    background-color: transparent;
    border: none;
    padding: 5px 0;
}

.form-control {
    background-color: transparent;
    border: 1px solid var(--bs-body-color);
    border-radius: 0px;
    padding: 2px 5px;
    display: block;
    width: 100% !important;
}
.form-control:focus{
    background-color: transparent;
    outline: none;
}

</style>
