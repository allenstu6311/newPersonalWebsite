<template>
    <b-modal :id="`modal-${modelId}`" centered size="lg" :title="content.title" @hide="clearId" ok-only ok-title="關閉"
        title-class="bold">
        <b-row>
            <b-col sm="12" lg="5" md="12" class="modalPic">
                <b-img :src="picPath"></b-img>
            </b-col>
            <b-col class="modal-content">
                <div class="introduce">
                    <p>{{ content.introduce }}</p>
                </div>
                <div class="skills_content">
                    <span>使用技術:</span><div v-for="item in skills" :key="item" class="skills-box"><span
                            :class="`skills skills_${item}`"></span><span>{{ item }}</span>
                    </div>
                </div>
                <div class="url">
                    <p>連結:
                        <a :href="url" v-if="url"> {{ url }}</a>
                        <span v-if="!url" style="color: red;">不好意思，因為是內部系統，無法提供連結!</span>
                    </p>
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
import bpmProject from "../../assets/image/bpmProject.jpg"

interface propsContent {
    title:String,
    introduce:String,

}

@Component({
    props: {
        id: String,
        content: Object,
        url: String,
        skills: Array,
    }
})

export default class mdoelByProject extends Vue {
    @Prop(String) id!: string;
    @Prop(Object) content!: propsContent
    @Prop(String) url!: string
    @Prop(Array) skills!: string[]

    public modelId: string = this.id
    public picPath: string = ''

    //根據傳入的id判斷
    @Watch("$props.id", { deep: true })
    showModel(newVal: string) {
        this.modelId = newVal
        if (newVal) {
            this.$nextTick(() => {
                switch (newVal) {
                    case 'ifrs17': this.picPath = ifrs17Project; break;
                    case 'anchuse': this.picPath = anchuseProject; break;
                    case 'cake': this.picPath = cakeProject; break;
                    case 'gym': this.picPath = gymProject; break;
                    case 'bpm': this.picPath = bpmProject; break;
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
        // console.log(this.id)
    }
}
</script>
  
<style scoped>
.modal-content {
    width: 50%;
    border: none;
}

.modal-content .introduce {
    height: 80%;
}

.modal-content .url {
    height: 20%;
}

.skills_content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.skills-box {
    display: flex;
    align-items: center;
}

.skills {
    position: relative;
    margin-left: 15px;

}

@media screen and (max-width:990px) {
    .modal-content {
        width: 100%;
    }

    .modalPic {
        margin-bottom: 15px;
    }
}

.skills {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.skills_Vue {
    background-color: var(--bs-green);
}

.skills_Css {
    background-color: var(--bs-blue);
}

.skills_Html {
    background-color: var(--bs-orange);
}

.skills_Element {
    background-color: var(--bs-cyan);
}

.skills_Java {
    background-color: var(--bs-red);
}

.skills_Php {
    background-color: var(--bs-purple);
}

.skills_Bootstrap {
    background-color: var(--bs-indigo);
}

.skills_Nodejs {
    background-color: var(--bs-yellow);
}

.skills_Scss {
    background-color: var(--bs-pink);
}

.skills_Js {
    background-color: var(--bs-warning);
}

.skills_Jquery {
    background-color: var(--bs-info);
}

.skills_Jsp {
    background-color: var(--bs-success);
}
</style>
  
  