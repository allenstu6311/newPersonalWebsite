<template>
    <header>
        <nav>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>project</li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import Vue from "vue"



export default class Header extends Vue {
  // annotate refs type.
  // The symbol `!` (definite assignment assertion)
  // is needed to get rid of compilation error.
//   $refs!: {
//     input: HTMLInputElement
//   }

  mounted() {
    // Use `input` ref without type cast.
    // this.$refs.input.focus()
    console.log(this.$refs)
    alert()
  }
}



</script>