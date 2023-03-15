import { useCallback, useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, View } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { styles } from "./styles";

interface Task {
  name: string;
  done: boolean;
}

export function Home() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [taskName, setTaskName] = useState<string>('')

  const handleTaskAdd = useCallback(() => {

    if (!taskName) {
      return
    }

    if (tasks.find(t => t.name === taskName)) {
      return Alert.alert("Task Duplicada", "Já existe um exatamente com essa descrição.")
    }

    setTasks(t => [...t, { name: taskName, done: false }])
    setTaskName('')
  }, [taskName, setTaskName, tasks, setTasks])

  const handleRemoveTask = useCallback((taskName: string) => {

    Alert.alert("Remover tarefa", "Tem certeza que deseja remover essa tarefa ? Essa ação não pode ser desfeita.", [
      {
        text: "Sim",
        onPress: () => {
          setTasks(state => state.filter(task => task.name.toLowerCase().trim() !== taskName.toLowerCase().trim()))
        }
      },
      {
        text: "Não",
        style: "cancel"
      },
    ])
  }, [setTasks])

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#6b6b6b"
            onChangeText={(v) => setTaskName(v)}
            value={taskName}
          />

          <Button onPress={handleTaskAdd} />
        </View>

        <View style={styles.countContainer}>

          <View style={styles.countView}>
            <Text style={styles.countCreatedText}>
              Criadas
            </Text>
            <View style={styles.countBadge}>
              <Text style={styles.countBadgeText}>
                {tasks.length}
              </Text>
            </View>
          </View>

          <View style={styles.countView}>
            <Text style={styles.countDoneText}>
              Concluídas
            </Text>
            <View style={styles.countBadge}>
              <Text style={styles.countBadgeText}>
                {tasks.filter(t => t.done).length}
              </Text>
            </View>
          </View>

        </View>

        <FlatList
          keyExtractor={item => item.name}
          data={tasks}
          renderItem={({ item, index }) => (
            <Task 
              key={item.name} 
              done={item.done} 
              task={item.name} 
              delete={() => {setTasks(tasks.filter((_,i)=>i!==index))}} 
              setDone={() => {setTasks(tasks.map((item,i)=>{
                if(i===index) {
                  return {
                    ...item,
                    done: !item.done
                  }
                }
                return item
              }))}} 
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listContainer}>
              <View style={styles.listEmptyImage}>
                <Image source={require('../../../assets/Clipboard.png')} />
              </View>
              <Text style={styles.listEmptyTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
}