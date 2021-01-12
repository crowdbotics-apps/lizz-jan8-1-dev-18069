import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_214_86} />
      <View style={styles.View_214_87}>
        <View style={styles.View_214_88} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da0a/ff85/d0b566d1eabc27ec99246a6e0648e93a"
          }}
          style={styles.ImageBackground_214_89}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a93f/1380/43741afb1ca575b90aaa3f8c56627483"
          }}
          style={styles.ImageBackground_214_90}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f670/0567/58e315badf32c0883199bde7428c2560"
          }}
          style={styles.ImageBackground_214_91}
        />
      </View>
      <View style={styles.View_214_92}>
        <View style={styles.View_214_93} />
        <View style={styles.View_214_94} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c6e/b466/1990ecfedffa4d0a56946bb3aa30264f"
          }}
          style={styles.ImageBackground_214_95}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da87/7224/ad425a7e5cd0d3123e7b56f0b4b286be"
        }}
        style={styles.ImageBackground_214_96}
      />
      <View style={styles.View_214_97} />
      <View style={styles.View_240_6}>
        <View style={styles.View_240_7} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4480/4f97/933c026c3e8a822a416c7d8b4cca460e"
          }}
          style={styles.ImageBackground_240_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7072/78ee/638b853a8cf9a9d027f81501e8806b74"
          }}
          style={styles.ImageBackground_240_9}
        />
      </View>
      <View style={styles.View_214_108} />
      <View style={styles.View_214_109}>
        <View style={styles.View_214_110}>
          <Text style={styles.Text_214_110}>About MeetPink</Text>
        </View>
        <View style={styles.View_214_111}>
          <View style={styles.View_214_112} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc72/f569/0c28c4f41becd01b478a6dd3caaf0212"
            }}
            style={styles.ImageBackground_214_113}
          />
        </View>
      </View>
      <View style={styles.View_214_114}>
        <View style={styles.View_214_115}>
          <View style={styles.View_214_116} />
          <View style={styles.View_214_117}>
            <Text style={styles.Text_214_117}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna tellus, pharetra id laoreet a, posuere in velit. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Maecenas vel
              porta leo, rhoncus lacinia diam.{" "}
            </Text>
          </View>
          <View style={styles.View_214_118}>
            <Text style={styles.Text_214_118}>About MeetPink</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_214_124}>
        <View style={styles.View_214_125} />
        <View style={styles.View_214_126}>
          <View style={styles.View_214_127}>
            <Text style={styles.Text_214_127}>New members</Text>
          </View>
          <View style={styles.View_214_128}>
            <Text style={styles.Text_214_128}>18</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_214_168}>
        <View style={styles.View_214_169} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84d5/ca3e/2946827c64d08c6aee74bed270764b90"
          }}
          style={styles.ImageBackground_214_202}
        />
        <View style={styles.View_214_170}>
          <View style={styles.View_214_171}>
            <Text style={styles.Text_214_171}>New peasants</Text>
          </View>
          <View style={styles.View_214_172}>
            <Text style={styles.Text_214_172}>18</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_214_134}>
        <View style={styles.View_214_135} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbac/fe2c/fda5286c986775c35395af8b9b5f809a"
          }}
          style={styles.ImageBackground_214_203}
        />
        <View style={styles.View_214_136}>
          <View style={styles.View_214_137}>
            <Text style={styles.Text_214_137}>New baronesses</Text>
          </View>
          <View style={styles.View_214_138}>
            <Text style={styles.Text_214_138}>32</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_214_139}>
        <View style={styles.View_214_140} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b684/7fca/a927b4166ea23a4006c563ec0fd74741"
          }}
          style={styles.ImageBackground_214_204}
        />
        <View style={styles.View_214_141}>
          <View style={styles.View_214_142}>
            <Text style={styles.Text_214_142}>New countesses</Text>
          </View>
          <View style={styles.View_214_143}>
            <Text style={styles.Text_214_143}>16</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_214_144}>
        <View style={styles.View_214_145} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b95/e778/067d17e71a44d3fa5f36aaf334fba9f3"
          }}
          style={styles.ImageBackground_214_205}
        />
        <View style={styles.View_214_146}>
          <View style={styles.View_214_147}>
            <Text style={styles.Text_214_147}>New duchesses</Text>
          </View>
          <View style={styles.View_214_148}>
            <Text style={styles.Text_214_148}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_214_173}>
        <View style={styles.View_214_174} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db3/a91f/5b057644fd6c58af2afbe0066c282f80"
          }}
          style={styles.ImageBackground_214_206}
        />
        <View style={styles.View_214_175}>
          <View style={styles.View_214_176}>
            <Text style={styles.Text_214_176}>New princesses</Text>
          </View>
          <View style={styles.View_214_177}>
            <Text style={styles.Text_214_177}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_214_178}>
        <View style={styles.View_214_179} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b9a/7409/949346bd1750433113e494819e4217da"
          }}
          style={styles.ImageBackground_214_207}
        />
        <View style={styles.View_214_180}>
          <View style={styles.View_214_181}>
            <Text style={styles.Text_214_181}>New queens</Text>
          </View>
          <View style={styles.View_214_182}>
            <Text style={styles.Text_214_182}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_214_183}>
        <View style={styles.View_214_184} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ec0/e7ce/596402a6c568cdabc117565c7365a886"
          }}
          style={styles.ImageBackground_214_208}
        />
        <View style={styles.View_214_185}>
          <View style={styles.View_214_186}>
            <Text style={styles.Text_214_186}>New highlanders</Text>
          </View>
          <View style={styles.View_214_187}>
            <Text style={styles.Text_214_187}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_214_86: {
    width: 414,
    minWidth: 414,
    height: 896,
    minHeight: 896,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(97, 97, 118, 1)"
  },
  View_214_87: {
    width: 414,
    minWidth: 414,
    height: 114.0955810546875,
    minHeight: 114.0955810546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 806
  },
  View_214_88: {
    width: 414,
    minWidth: 414,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(85, 85, 108, 1)"
  },
  ImageBackground_214_89: {
    width: 28,
    height: 29.78350830078125,
    top: 84.31201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336
  },
  ImageBackground_214_90: {
    width: 29,
    height: 29.78350830078125,
    top: 84.31201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50
  },
  ImageBackground_214_91: {
    width: 51,
    minWidth: 51,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 182,
    top: 31
  },
  View_214_92: {
    width: 300,
    minWidth: 300,
    height: 300,
    minHeight: 300,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57,
    top: 123
  },
  View_214_93: {
    width: 300,
    minWidth: 300,
    height: 300,
    minHeight: 300,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200
  },
  View_214_94: {
    width: 300,
    minWidth: 300,
    height: 300,
    minHeight: 300,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(85, 85, 108, 1)",
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200
  },
  ImageBackground_214_95: {
    width: 636,
    minWidth: 636,
    height: 304,
    minHeight: 304,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -202,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_214_96: {
    width: 200,
    minWidth: 200,
    height: 200,
    minHeight: 200,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 332,
    resizeMode: "cover"
  },
  View_214_97: {
    width: 414,
    minWidth: 414,
    height: 1336,
    minHeight: 1336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(97, 97, 118, 1)"
  },
  View_240_6: {
    width: 300,
    minWidth: 300,
    height: 300,
    minHeight: 300,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57,
    top: 123
  },
  View_240_7: {
    width: 300,
    minWidth: 300,
    height: 300,
    minHeight: 300,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(238, 77, 131, 1)",
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200
  },
  ImageBackground_240_8: {
    width: 182,
    minWidth: 182,
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 168
  },
  ImageBackground_240_9: {
    width: 185,
    minWidth: 185,
    height: 147,
    minHeight: 147,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57,
    top: 50,
    resizeMode: "cover"
  },
  View_214_108: {
    width: 414,
    minWidth: 414,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(85, 85, 108, 1)"
  },
  View_214_109: {
    width: 211,
    minWidth: 211,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  View_214_110: {
    width: 140,
    minWidth: 140,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71,
    top: 7
  },
  Text_214_110: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_111: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_214_112: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(238, 77, 131, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_214_113: {
    width: 16,
    height: 25.528667449951172,
    top: 15.1019287109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  View_214_114: {
    width: 374,
    minWidth: 374,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 466
  },
  View_214_115: {
    width: 374,
    minWidth: 374,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_214_116: {
    width: 374,
    minWidth: 374,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(85, 85, 108, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_214_117: {
    width: 340,
    minWidth: 340,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 57
  },
  Text_214_117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_118: {
    width: 151,
    minWidth: 151,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  Text_214_118: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_124: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 686
  },
  View_214_125: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(48, 48, 63, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_214_126: {
    width: 340,
    minWidth: 340,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 25
  },
  View_214_127: {
    width: 251,
    minWidth: 251,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_214_127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_128: {
    width: 77,
    minWidth: 77,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 263,
    top: 0
  },
  Text_214_128: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_168: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 766
  },
  View_214_169: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(48, 48, 63, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_214_202: {
    width: 70,
    minWidth: 70,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 0,
    resizeMode: "cover"
  },
  View_214_170: {
    width: 270,
    minWidth: 270,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90,
    top: 25
  },
  View_214_171: {
    width: 251,
    minWidth: 251,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_214_171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_172: {
    width: 77,
    minWidth: 77,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193,
    top: 0
  },
  Text_214_172: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_134: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 846
  },
  View_214_135: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(48, 48, 63, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_214_203: {
    width: 70,
    minWidth: 70,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 0,
    resizeMode: "cover"
  },
  View_214_136: {
    width: 272,
    minWidth: 272,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90,
    top: 5
  },
  View_214_137: {
    width: 251,
    minWidth: 251,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 20
  },
  Text_214_137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_138: {
    width: 77,
    minWidth: 77,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 0
  },
  Text_214_138: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_139: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 926
  },
  View_214_140: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(48, 48, 63, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_214_204: {
    width: 70,
    minWidth: 70,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 0,
    resizeMode: "cover"
  },
  View_214_141: {
    width: 272,
    minWidth: 272,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90,
    top: 5
  },
  View_214_142: {
    width: 251,
    minWidth: 251,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 20
  },
  Text_214_142: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_143: {
    width: 77,
    minWidth: 77,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 0
  },
  Text_214_143: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_144: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 1006
  },
  View_214_145: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(48, 48, 63, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_214_205: {
    width: 70,
    minWidth: 70,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 0,
    resizeMode: "cover"
  },
  View_214_146: {
    width: 272,
    minWidth: 272,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90,
    top: 5
  },
  View_214_147: {
    width: 251,
    minWidth: 251,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 20
  },
  Text_214_147: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_148: {
    width: 77,
    minWidth: 77,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 0
  },
  Text_214_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_173: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 1086
  },
  View_214_174: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(48, 48, 63, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_214_206: {
    width: 70,
    minWidth: 70,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 0,
    resizeMode: "cover"
  },
  View_214_175: {
    width: 272,
    minWidth: 272,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90,
    top: 5
  },
  View_214_176: {
    width: 251,
    minWidth: 251,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 20
  },
  Text_214_176: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_177: {
    width: 77,
    minWidth: 77,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 0
  },
  Text_214_177: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_178: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 1166
  },
  View_214_179: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(48, 48, 63, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_214_207: {
    width: 70,
    minWidth: 70,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 0,
    resizeMode: "cover"
  },
  View_214_180: {
    width: 272,
    minWidth: 272,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90,
    top: 5
  },
  View_214_181: {
    width: 251,
    minWidth: 251,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 20
  },
  Text_214_181: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_182: {
    width: 77,
    minWidth: 77,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 0
  },
  Text_214_182: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_183: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 1246
  },
  View_214_184: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(48, 48, 63, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_214_208: {
    width: 56,
    minWidth: 56,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 7,
    resizeMode: "cover"
  },
  View_214_185: {
    width: 272,
    minWidth: 272,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90,
    top: 5
  },
  View_214_186: {
    width: 251,
    minWidth: 251,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 20
  },
  Text_214_186: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_187: {
    width: 77,
    minWidth: 77,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 0
  },
  Text_214_187: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 1336 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
