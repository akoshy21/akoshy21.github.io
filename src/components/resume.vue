<template>
  <div class="resume">
  <div class="scroll"><table><tr><th>Education</th></tr></table></div></div>
</template>

<script>
export default {
name: "resume"
}
</script>

<style scoped>
table{
  margin-left:30px;
  margin-top: 40px;
}

.resume{
  flex-grow:1;
  padding-left:50px;
  align-items: stretch;
  height:100vh;
}

table th{
  font-family: 'lemonmilk';
  font-size: 36px;
  vertical-align: top;
  text-align: right;
  color: var(--second);}
</style>