import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { styles } from './styles';

interface Props {
  done: boolean
  task: string
  delete: () => void
  setDone: () => void
}

export function Task(props: Props) {

  const doneStyle = useMemo(() => {
    const style = StyleSheet.create({
      text: {
        textDecorationLine: "line-through",
        color: "#808080"
      }
    })
    return props.done ? style.text : {}
  }, [props.done])

  const alertDelete = useCallback(()=>{
    Alert.alert("Deletar","Tem certeza ?",[
      {
        onPress: props.delete,
        text: "Sim",
        style: "destructive",
      },
      {
        text: "Não",
        style: "cancel",
      },
    ])
  },[props.delete])

  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.clickableContainer}
        onPress={props.setDone}
      >
        <Icon
          size={20}
          name={props.done ? 'check-circle' : 'circle'}
          style={props.done ? styles.iconDone : styles.icon}
        />
        <Text style={{ ...styles.text, ...doneStyle }}>
          {props.task}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.trash}
        onPress={alertDelete}
      >
        <Icon
          size={20}
          name='trash-2'
          style={{color: '#808080'}}
        />
      </TouchableOpacity>
    </View>
  );
}