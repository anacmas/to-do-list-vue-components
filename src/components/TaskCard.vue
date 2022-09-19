<template>
  <div class="card-stacked">
    <div class="card-content">
      <p>{{ title }}</p>
      <span class="projeto">{{ project }}</span>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
      <button @click="exclude(index)">Deletar</button>
      <button @click="edit(index)">Editar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskCard",
  props: {
    title: String,
    project: String,
    exclude: Function,
    edit: Function,
    index: Number,
  },
};
</script>
