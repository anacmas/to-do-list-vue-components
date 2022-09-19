<template>
  <div class="col s12">
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
          <v-form v-model="valid">
            <v-container>
              <h2>{{ indexCard != null ? "Edit Task" : "New Task" }}</h2>
              <v-row>
                <div class="conteudo">
                  <div>
                    <div class="container-taskedition">
                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="title"
                          :rules="titleRules"
                          label="Title"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-row>
                        <v-col cols="12">
                          <v-select
                            :items="items"
                            :menu-props="{ top: true, offsetY: true }"
                            label="Project"
                          ></v-select>
                        </v-col>
                      </v-row>
                    </div>
                    <div class="input-field col s12">
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-model="date"
                                label="Picker in menu"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title scrollable>
                              <v-spacer></v-spacer>
                              <v-btn text color="primary" @click="menu = false">
                                Cancel
                              </v-btn>
                              <v-btn
                                text
                                color="primary"
                                @click="$refs.menu.save(date)"
                              >
                                OK
                              </v-btn>
                            </v-date-picker>
                          </v-menu>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="12" sm="6" md="4">
                          <v-dialog
                            ref="dialog"
                            v-model="modal"
                            :return-value.sync="date"
                            persistent
                            width="290px"
                          ></v-dialog></v-col
                      ></v-row>
                    </div>
                  </div>
                  <v-btn
                    id="btnSave"
                    @click="useSave"
                    class="ma-2"
                    outlined
                    color="indigo"
                  >
                    Salvar
                  </v-btn>
                </div>
              </v-row>
            </v-container>
          </v-form>
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
    items: ["Estudo", "Trabalho", "Finanças"],
    valid: false,
    titleRules: [(v) => !!v || "Title is required"],
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

<style>
.container-taskedition {
  align-items: center;
  display: flex;
}

.conteudo {
  display: flex;
  flex-direction: column;
}
</style>
