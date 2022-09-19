<template>
  <div class="card-stacked">
    <div class="card-content">
      <p>{{ title }}</p>
      <span class="projeto">{{ project }}</span>
    </div>
    <div class="text-center">
      <v-btn @click="exclude(index)" class="ma-2" outlined color="indigo">
        <i class="fa-solid fa-trash"></i>
      </v-btn>

      <v-btn @click="edit(index)" class="ma-2" outlined color="indigo">
        <v-icon dark> mdi-pencil </v-icon>
      </v-btn>
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
