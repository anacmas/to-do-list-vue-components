<template>
  <div class="col s12">
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
          <h2>{{ indexCard != null ? "Edit Task" : "New Task" }}</h2>
          <form action="">
            <div class="input-field col s12">
              <input
                v-model="title"
                placeholder="Title"
                id="title"
                type="text"
                class="validate"
                required
              />
              <label for="title">Title</label>
            </div>
            <div class="input-field col s12">
              <select id="project" v-model="project">
                <option value="" disabled selected>Choose your option</option>
                <option value="Estudos">Estudos</option>
                <option value="Financeiro">Financeiro</option>
                <option value="Trabalho">Trabalho</option>
              </select>
              <label for="project">Pick a Project</label>
            </div>
            <div class="input-field col s12">
              <input type="date" class="datepicker" id="dueTo" v-model="date" />
              <label for="dueTo">Date due to</label>
            </div>
            <a
              class="waves-effect waves-light btn-large"
              id="btnSave"
              @click="useSave"
              >Save</a
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskEdition",
  props: {
    indexCard: Number,
    save: Function,
    task: Object,
  },
  data: () => ({
    title: "",
    date: "",
    project: "",
  }),
  methods: {
    useSave() {
      this.save(this.title, this.date, this.project);
      this.title = "";
      this.date = "";
      this.project = "";
    },
  },
  watch: {
    task() {
      this.title = this.tasks.title;
      this.date = this.tasks.date;
      this.project = this.tasks.project;
    },
  },
};
</script>
