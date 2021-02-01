<template>
    <div class="messageBox">
        <h2>{{title}}</h2>
        <p>{{content}}</p>
        <div v-if="cancel" @touchstart="handleCancel">{{cancel}}</div>
        <div v-if="ok" @touchstart="handleOk">{{ok}}</div>
    </div>
</template>

<script>
export default{
    name:'messageBox'
}
</script>

<style>

</style>