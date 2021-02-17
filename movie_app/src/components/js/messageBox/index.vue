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
    name:'MessageBox'
}
</script>

<style>
    .messageBox{width:200px;height:170px;border:1px solid red;position:fixed;top:25%;left:50%;margin-top:-100px;margin-left:-95px;background:#ccc;}
    .messageBox>*{line-height:56px;text-align: center;}
    .messageBox:not(:first-child){font-size:16px}


</style>