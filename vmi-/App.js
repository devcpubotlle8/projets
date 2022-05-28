import React, { Component } from 'react';
import {StyleSheet,Text,Button, TouchableOpacity, Animated, View} from 'react-native';

export default class App extends Component {
  state = {
    game: false,
    colorList: [],
    pressed: 0,
    brown: new Animated.Value(3),
    orange: new Animated.Value(3),
    blue: new Animated.Value(5),
    pink: new Animated.Value(1),
    red: new Animated.Value(4),
    yellow: new Animated.Value(2),
    white: new Animated.Value(2),
  
  };

    colorVerif(color) {
    const { game, pressed, colorList } = this.state;
    if (!game) return;
    if (colorList[pressed] !== color) {
      alert('Vous avez perdu. Réessayer ?');
      this.setState({ game: false });
    } else if (pressed === colorList.length - 1) {
      alert('Vous avez gagné , Félicitations');
      this.setState({ game: false });
    } else {
      this.setState({ pressed: pressed + 1 });
    }
  }

    nouvellePartie() {
    if (this.state.game) return;
    const theColors = ['brown', 'orange', 'blue' , 'pink', 'red', 'yellow','white'];
    const colorList = Array.from(
      { length: 5 }, //augmenter/diminuer la taille pour augmenter/diminuer la difficulté
      () => theColors[Math.floor(Math.random() * theColors.length)]
    );
    this.setState({ game: true, colorList: colorList, pressed: 0 });
    let animations = [];
    colorList.forEach(color => {
      animations.push(
        Animated.timing(this.state[color], {
          toValue: 0,
          duration: 320,
        })
      );
      animations.push(
        Animated.timing(this.state[color], {
          toValue: 1,
          duration: 320,
        })
      );
    });
    Animated.sequence(animations).start();
  }


   render() {
    return (
      <View style={styles.container}>

<Text style={{textAlign: 'center',color: 'white', margin:10, fontSize: 15 , backgroundColor: "grey",borderWidth: 5, padding: 12}}> VMI {"\n"} (Visual Memory Improvement) </Text>

       <TouchableOpacity onPress={() => this.colorVerif('brown')}>
          <Animated.View
            style={[
              styles.box,
              { backgroundColor: 'brown', opacity: this.state.brown },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.colorVerif('orange')}>
          <Animated.View
            style={[
              styles.box,
              { backgroundColor: 'orange', opacity: this.state.orange },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.colorVerif('blue')}>
          <Animated.View
            style={[
              styles.box,
              { backgroundColor: 'blue', opacity: this.state.blue },
            ]}
          />
        </TouchableOpacity>
         <TouchableOpacity onPress={() => this.colorVerif('pink')}>
          <Animated.View
            style={[
              styles.box,
              { backgroundColor: 'pink', opacity: this.state.pink },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.colorVerif('red')}>
          <Animated.View
            style={[
              styles.box,
              { backgroundColor: 'red', opacity: this.state.red },
            ]}
          />
        </TouchableOpacity>
         <TouchableOpacity onPress={() => this.colorVerif('yellow')}>
          <Animated.View
            style={[
              styles.box,
              { backgroundColor: 'yellow', opacity: this.state.yellow },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.colorVerif('white')}>
          <Animated.View
            style={[
              styles.box,
              { backgroundColor: 'white', opacity: this.state.white },
            ]}
          />
        </TouchableOpacity>

        <Text style={{textAlign: 'center',color: 'white', margin:10, fontSize: 17}}> Mémorise l'ordre 
        d'apparition des couleurs et retranscrit les dans le bon ordre en appuyant sur celles-ci. </Text>

        <Button title="Nouvelle Partie" title="Nouvelle Partie"
        color="#663399" onPress={() => this.nouvellePartie()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

   box: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'space-between',
  },


  container: {
    flex: 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 30,
    borderRadius: 24,
  },

});


//made by maxime desruets