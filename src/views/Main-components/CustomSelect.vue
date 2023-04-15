<template>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open">
            {{ selected }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div v-for="(option, i) of options" :key="i" @click="
                selected = option;
            open = false;
            $emit('input', option);
                                          ">
                {{ option }}
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            selected: this.default
                ? this.default
                : this.options.length > 0
                    ? this.options[0]
                    : null,
            open: false,
        };
    },
    mounted() {
        this.$emit("input", this.selected);
    },
};
</script>
  
<style lang="scss">
@import '../../assets/scss/vars';
.custom-select {
    position: relative;
    width: 320px;
    text-align: left;
    outline: none;
    line-height: 35px;
    max-width: 320px;
    font-size: 17px;
    max-height: 50px;
}

.custom-select .selected {
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #ECEEF0;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    color: #413F3F;
    cursor: pointer;
    user-select: none;
    border-radius: 14px;
    padding: 12px;
}

.custom-select .selected.open {
    border-radius: 14px 14px 0 0;
}

.custom-select .selected:after {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    background: #677A45;
    background-size: contain;
    border-radius: 100%;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
}

.custom-select .selected.open::after {

}

.custom-select .items {
    color: #2C2C2C;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid #ECEEF0;
    border-left: 1px solid #ECEEF0;
    border-bottom: 1px solid #ECEEF0;
    position: absolute;
    background-color: #fff;
    left: 0;
    right: 0;
    z-index: 1;
 
}

.custom-select .items div {
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.3px;
    color: #413F3F;
    
    padding: 10px 0;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
    transition: background 0.3s;
}

.custom-select .items div:hover {
    background-color: #f5f3f3;
}

.selectHide {
    display: none;
}
</style>
  