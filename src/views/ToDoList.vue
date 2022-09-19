<template>
  <div id="index">
    <nav class="orange darken-2">
      <div class="nav-wrapper"></div>
    </nav>
    <div class="container">
      <div class="section">
        <!--   Icon Section   -->
        <div class="row" v-show="!modoAdicionar">
          <!-- card de tarefa que repete para cada item do array -->
          <div
            v-for="(task, index) in tasks"
            :key="index"
            class="card horizontal"
          >
            <TaskCard
              :index="index"
              :title="task.title"
              :project="task.project"
              :exclude="exclude"
              :edit="edit"
            />
          </div>
        </div>
        <!-- NOVA TAREFA -->
        <div class="row" v-show="modoAdicionar">
          <TaskEdition
            :indexCard="indexCard"
            :save="save"
            :task="newTaskValue"
          />
        </div>
      </div>
      <div class="add">
        <a
          class="btn-floating btn-large waves-effect waves-light red"
          @click="adicionar"
          ><i class="fa-solid fa-plus"></i
        ></a>
      </div>
    </div>
    <footer class="page-footer orange darken-3">
      <div class="footer-copyright">
        <div class="container">© 2022</div>
      </div>
    </footer>
  </div>
</template>

<script>
import TaskEdition from "../components/TaskEdition.vue";
import TaskCard from "../components/TaskCard.vue";

export default {
  name: "HelloWorld",
  components: {
    TaskCard,
    TaskEdition,
  },
  data: () => ({
    message: "Olá Vue!",
    tasks: [],
    modoAdicionar: false,
    indexCard: null,
    newTaskValue: null,
  }),
  methods: {
    getTasks() {
      fetch("http://localhost:3000/tasks")
        .then((response) => response.json())
        .then((tarefasJson) => {
          console.log(tarefasJson);
          this.tasks = tarefasJson;
        });
    },
    adicionar() {
      this.modoAdicionar = true;
    },
    save(title, date, project) {
      if (this.indexCard != null) {
        this.tasks[this.indexCard].title = title;
        this.tasks[this.indexCard].date = date;
        this.tasks[this.indexCard].project = project;
        this.indexCard = null;
      } else {
        this.tasks.push({
          title: title,
          date: date,
          project: project,
        });
      }
      this.modoAdicionar = false;
    },
    exclude(index) {
      this.tasks.splice(index, 1);
    },
    edit(index) {
      (this.newTaskValue = {
        title: this.tasks[index].title,
        date: this.tasks[index].date,
        project: this.tasks[index].project,
      }),
        (this.indexCard = index);
      this.adicionar();
    },
  },
  created() {
    console.log("created");
    this.getTasks();
  },
  mounted() {
    console.log("montend");
  },
};
</script>

<style scoped>
select {
  display: inline;
  margin-top: 35px;
}
</style>
