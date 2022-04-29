<script setup lang="ts">
import { Task } from "@/Task";

defineProps<{
  task?: Task;
}>();
</script>

<template>
  <div>
    <div>Present Simple</div>
    <table class="table">
      <tr>
        <td rowspan="2" class="table__sign">+</td>
        <td>
          <div>I</div>
          <div>We</div>
          <div>You</div>
          <div>They</div>
        </td>
        <td>work</td>
      </tr>
      <tr>
        <td>
          <div>He</div>
          <div>She</div>
          <div>It</div>
        </td>
        <td>work<mark>s</mark></td>
      </tr>
    </table>

    <table class="table">
      <tr>
        <td rowspan="2" class="table__sign">-</td>
        <td>
          <div>I</div>
          <div>We</div>
          <div>You</div>
          <div>They</div>
        </td>
        <td>don't</td>
        <td>work</td>
      </tr>
      <tr>
        <td>
          <div>He</div>
          <div>She</div>
          <div>It</div>
        </td>
        <td>do<mark>es</mark>n't</td>
        <td>work</td>
      </tr>
    </table>

    <table class="table">
      <tr>
        <td rowspan="2" class="table__sign">?</td>
        <td>Do</td>
        <td>
          <div>I</div>
          <div>we</div>
          <div>you</div>
          <div>they</div>
        </td>
        <td>work?</td>
      </tr>
      <tr>
        <td>Do<mark>es</mark></td>
        <td>
          <div>he</div>
          <div>she</div>
          <div>it</div>
        </td>
        <td>work?</td>
      </tr>
    </table>
  </div>
</template>

<style>
.table {
  width: 100%;
}

.table td {
  border: 1px solid #000;
  padding: 10px;
}

.table__sign {
  text-align: center;
  width: 10%;
}
</style>
