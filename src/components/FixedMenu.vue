<template>
  <div class="oi">
    <v-card height="100vh" width="256" class="mx-auto">
      <v-navigation-drawer permanent color="rgba(26, 0, 112, 0.305)">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Menu </v-list-item-title>
            <v-list-item-subtitle> To-do list </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="$vuetify.goTo(item.link)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Tarefas",
          icon: "mdi-book-open-page-variant-outline",
          link: "../views/ToDoList.vue",
        },
        {
          title: "Painel - resumo",
          icon: "mdi-view-dashboard",
          link: "/todolist",
        },
        {
          title: "Tipos de tarefa",
          icon: "mdi-book-edit-outline",
          link: "/todolist",
        },
        { title: "Sobre", icon: "mdi-help-box", link: "/about" },
      ],
      right: null,
    };
  },
};
</script>

<style>
body {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
