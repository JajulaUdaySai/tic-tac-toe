import React, { useState, ReactDOM, Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default class Tic_Tac_Toe extends Component {
  constructor(props) {
    super(props);
    
    this.DefaultValues = {
      playerTurn: 1,
      mapArray: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      winner: 0,
      gameStatus: '',
      blocksFilled: 1,
      B00 : '',
      B01 : '',
      B02 : '',
      B10 : '',
      B11 : '',
      B12 : '',
      B20 : '',
      B21 : '',
      B22 : ''
    };

    this.state = this.DefaultValues;
  }
  
  onPressFun(row, column) {
    
    //Matrix
    var Map = this.state.mapArray;
    //Check is game is over
    if (this.state.winner == 0) {
      //Check Block is filled
      let IsEmptyBlock = Map[row][column] > 0 ? false : true;
      if (IsEmptyBlock) {
        let PlayerSymbol;
        let PTurn = this.state.playerTurn;

        //Check Player
        if (PTurn == 1) {
          //Change Player
          this.setState({playerTurn: 2});
          PlayerSymbol = 'X';
        } else {
          //Change Player
          this.setState({playerTurn: 1});
          PlayerSymbol = 'O';
        }

        
        let BlockToUpdate = 'B'+ row +column ;
        //this.setState({BlockToUpdate:PlayerSymbol});
        switch(BlockToUpdate)
        {
          case 'B00':
           this.setState({B00:PlayerSymbol});
           break;

          case 'B01':
            this.setState({B01:PlayerSymbol});
            break;

          case 'B02':
            this.setState({B02:PlayerSymbol});
            break;

          case 'B10':
            this.setState({B10:PlayerSymbol});
            break;

          case 'B11':
            this.setState({B11:PlayerSymbol});
            break;

          case 'B12':
            this.setState({B12:PlayerSymbol});
            break;

          case 'B20':
            this.setState({B20:PlayerSymbol});
            break;

          case 'B21':
            this.setState({B21:PlayerSymbol});
            break;

          case 'B22':
            this.setState({B22:PlayerSymbol});
             break;

        }
        

        //set Change

        Map[row][column] = PTurn;
        this.setState({mapArray: Map});
        
        let CheckWin = CheckMatrix(Map, PTurn);
        if (CheckWin) {
          let GameStatus = `Player ${PTurn} WON!`;
          this.setState({winner:PTurn});
          this.setState({gameStatus:GameStatus});

        } else if (this.state.blocksFilled == 9) {
          let GameStatus = `its a Draw!`;
          this.setState({gameStatus:GameStatus});
          this.setState({winner:3});
        }

        this.setState({blocksFilled:(this.state.blocksFilled + 1)});
      }
    }
    else
    {
       this.setState({
        playerTurn: 1,
        mapArray: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        winner: 0,
        gameStatus: '',
        blocksFilled: 1,
        B00 : '',
        B01 : '',
        B02 : '',
        B10 : '',
        B11 : '',
        B12 : '',
        B20 : '',
        B21 : '',
        B22 : ''
      });
    }

    function CheckMatrix(Matrix, PlayerID) {
      let Hstatus = CheckHorizontal(Matrix, PlayerID);
      if (Hstatus) {
        return true;
      } else {
        let Vstatus = CheckVertical(Matrix, PlayerID);
        if (Vstatus) {
          return true;
        } else {
          let Dstatus = CheckDiagonal(Matrix, PlayerID);
          if (Dstatus) {
            return true;
          } else {
            return false;
          }
        }
      }
    }

    function CheckHorizontal(Matrix, PlayerID) {
      for (var i = 0; i < Matrix.length; i++) {
        var Row = Matrix[i];
        if (Row[0] == PlayerID && Row[1] == PlayerID && Row[2] == PlayerID) {
          return true;
        }
      }
      return false;
    }

    function CheckVertical(Matrix, PlayerID) {
      if (
        (Matrix[0][0] == PlayerID &&
          Matrix[1][0] == PlayerID &&
          Matrix[2][0] == PlayerID) ||
        (Matrix[0][1] == PlayerID &&
          Matrix[1][1] == PlayerID &&
          Matrix[2][1] == PlayerID) ||
        (Matrix[0][2] == PlayerID &&
          Matrix[1][2] == PlayerID &&
          Matrix[2][2] == PlayerID)
      ) {
        return true;
      }
      return false;
    }

    function CheckDiagonal(Matrix, PlayerID) {
      if (
        (Matrix[0][0] == PlayerID &&
          Matrix[1][1] == PlayerID &&
          Matrix[2][2] == PlayerID) ||
        (Matrix[0][2] == PlayerID &&
          Matrix[1][1] == PlayerID &&
          Matrix[2][0] == PlayerID)
      ) {
        return true;
      }
      return false;
    }
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 80,
        margin: 20,
        flex: 1,
      },
      paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      Block: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        maxHeight: 70,
        minHeight: 70,
        maxWidth: 70,
        minWidth: 70,
      },

      Row:{ 
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row'
     },

     MatrixTable:{
        maxHeight: 210,
        minHeight: 210,
     }
    });
    return (
      <View style={styles.container}>
        <View style={styles.InnerContainer}>
          <View>
            <Text style={styles.paragraph}> Tic-Tak-Toe</Text>
          </View>
          <View style={styles.MatrixTable}>
            {/*Row 1*/}
            <View
              style={styles.Row}>
               {/* //Column 1  */}
              <TouchableHighlight
                style={styles.Block}
                onPress={(Event) => {
                  this.onPressFun(0, 0);
                }}>
                <View>
                  <Text>{this.state.B00}</Text>
                </View>
              </TouchableHighlight>
               {/* //Column 2 */}
              <TouchableHighlight
                style={styles.Block}
                onPress={(Event) => {
                  this.onPressFun(0, 1);
                }}>
                <View>
                  <Text>{this.state.B01}</Text>
                </View>
              </TouchableHighlight>
              {/* //Column 3 */}
              <TouchableHighlight
                style={styles.Block}
                onPress={(Event) => {
                  this.onPressFun(0, 2);
                }}>
                <View>
                  <Text>{this.state.B02}</Text>
                </View>
              </TouchableHighlight>
            </View>
            {/* //Row 2 */}
            <View
              style={styles.Row}>
                {/* //Cloumn 1 */}
              <TouchableHighlight
                style={styles.Block}
                onPress={(Event) => {
                  this.onPressFun(1, 0);
                }}>
                <View>
                  <Text>{this.state.B10}</Text>
                </View>
              </TouchableHighlight>
              {/* //Column 2 */}
              <TouchableHighlight
                style={styles.Block}
                onPress={(Event) => {
                  this.onPressFun(1, 1);
                }}>
                <View>
                  <Text> {this.state.B11}</Text>
                </View>
              </TouchableHighlight>
              {/* //Column 3 */}
              <TouchableHighlight
                style={styles.Block}
                onPress={(Event) => {
                  this.onPressFun(1, 2);
                }}>
                <View>
                  <Text>{this.state.B12}</Text>
                </View>
              </TouchableHighlight>
            </View>
            {/* //Row3 */}
            <View
              style={styles.Row}>
                {/* //Cloumn 1 */}
              <TouchableHighlight
                style={styles.Block}
                onPress={(Event) => {
                  this.onPressFun(2, 0);
                }}>
                <View>
                  <Text>{this.state.B20}</Text>
                </View>
              </TouchableHighlight>

              {/* //Column 2 */}
              <TouchableHighlight
                style={styles.Block}
                onPress={(Event) => {
                  this.onPressFun(2, 1);
                }}>
                <View>
                  <Text>{this.state.B21}</Text>
                </View>
              </TouchableHighlight>

              {/* //Column 3 */}
              <TouchableHighlight
                style={styles.Block}
                onPress={(Event) => {
                  this.onPressFun(2, 2);
                }}>
                <View>
                  <Text>{this.state.B22}</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <Text>{this.state.gameStatus}</Text>
        </View>
      </View>
    );
  }
}

