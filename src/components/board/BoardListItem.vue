<template>
  <tr class="row" @click="moveBoardDetail">
    
    <th class="col-1">
        <td>count</td>
        <td>{{board.title}}</td>
        <td>{{board.userId}}</td>
        <td>{{board.hits}}</td>
        <td>{{board.registeredTime}}</td>
    </th>
  </tr>
</template>

<script>
export default {
  name: "BoardListItem",
  props:{
    board : Object
  },
  methods: {
    moveBoardDetail() {},
  },
};
</script>

<style></style>
