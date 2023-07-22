<template>
    <b-modal :id="`modal-${modelId}`" centered  size="lg"  :title="content.title" @hide="clearId">  
        <b-row>
            <b-col>
                <b-img :src="picPath"></b-img>
            </b-col>
            <b-col class="modal-content">
                <div class="introduce">
                    <p>{{ content.introduce }}</p>
                </div>
                <div class="url">
                    <p>連結:</p>
                </div>
            </b-col>
        </b-row>
    </b-modal>
</template>
  
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Watch, Prop } from "vue-property-decorator";
import ifrs17Project from "../../assets/image/ifrs17Project.jpg"
import anchuseProject from "../../assets/image/anchuseProject.jpg"
import cakeProject from "../../assets/image/cakeProject.jpg"
import gymProject from "../../assets/image/gymProject.jpg"


@Component({
    props: {
        id: String,
        content: Object,
        image: String
    }
})

export default class mdoelByProject extends Vue {
    @Prop(String) id!: string;
    @Prop(Object) content!: Object
    @Prop(String) image!: string

    public modelId: string = this.id
    public picPath: string = ''

    //根據傳入的id判斷
    @Watch("$props.id", { deep: true })
    showModel(newVal: string) {
        this.modelId = newVal
        console.log(this.image)
        if (newVal) {
            this.$nextTick(() => {
                switch (newVal) {
                    case 'ifrs17': this.picPath = ifrs17Project; break;
                    case 'anchuse': this.picPath = anchuseProject; break;
                    case 'cake': this.picPath = cakeProject; break;
                    case 'gym': this.picPath = gymProject; break;
                }
                this.modelId = newVal
                this.$bvModal.show(`modal-${newVal}`)
            })
        }
    }

    clearId() {
        this.$emit("clearId")
    }

    mounted() {

    }
}
</script>
  
<style scoped>
.modal-content{
    border: none;
}
.modal-content .introduce{
    height: 80%;
}
.modal-content .url{
    height: 20%;
}
</style>
  
  