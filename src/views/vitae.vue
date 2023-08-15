<template>
    <div id="vitae" class="custom-container">
        <embed :src="pdfPath" type="application/pdf" width="100%" height="100%" />
    </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Vue from "vue";
import pdfData from '../assets/image/vitae.pdf';

@Component({
    props: {
        label: String,
    },
})
export default class vitae extends Vue {
    @Prop(String) label!: string;
    public pdfPath: string = pdfData

}
</script>
<style scoped>
#vitae{
    padding:70px 0px 0 0;
    height: 100vh;
    
}
embed{
    display: block;
    margin: auto;
}
</style>
