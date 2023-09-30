<template>
    <b-modal :id="`modal-${modelId}`" centered size="lg" :title="content.title"  @hide="closeModal" ok-only ok-title="關閉"
        title-class="bold">
        <b-row>
            <b-col sm="12" lg="5" md="12" class="modalPic">
                <b-img :src="pic"></b-img>
            </b-col>
            <b-col class="modal-content">
                <div class="introduce">
                    <p>{{ content.introduce }}</p>
                </div>
                <div class="skills_content">
                    <span>使用技術:</span>
                    <div v-for="item in skills" :key="item" class="skills-box"><span
                            :class="`skills skills_${item}`"></span><span>{{ item }}</span>
                    </div>
                </div>
                <div class="url">
                    <p>連結:
                        <a :href="url" v-if="url"  target="_blank"> {{ url }}</a>
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

interface propsContent {
    title: String,
    introduce: String,

}

@Component({
    props: {
        id: String,
        pic: String,
        content: Object,
        url: String,
        skills: Array,
    }
})

export default class mdoelByProject extends Vue {
    @Prop(String) id!: string;
    @Prop(String) pic!: string;
    @Prop(Object) content!: propsContent
    @Prop(String) url!: string
    @Prop(Array) skills!: string[]

    public modelId: string = ''
    public picPath: string = ''

    //根據傳入的id判斷
    @Watch("$props.id", { deep: true })
    showModel(newVal: string) {
        this.modelId = newVal
        if (newVal) {
          
            this.$nextTick(() => {
                this.$bvModal.show(`modal-${this.modelId}`)
            })

        }
    }

    closeModal(){
        this.modelId = ""
        this.$emit('clearId')
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
  
  