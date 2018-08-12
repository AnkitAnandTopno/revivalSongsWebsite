import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addSong} from '../actions/index.js';
import {bindActionCreators} from 'redux';
import sandrbox from '../kurti2uni';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
const initialState = {
  hindi:false,
  newNum: "",
  oldNum: "",
  songName: "",
  lyrics: "",
  songNum: 0

};
class AddSong extends Component {
  constructor(props) {
   super(props);
   this.state = initialState;

   this.handleInputChange = this.handleInputChange.bind(this);
 }

 convert_to_unicode( stringtochange)
 {

   stringtochange = stringtochange.replace('Å”', 'ÅWa');
 var array_one = new Array(
 // "(",")",
 "ñ","Q+Z","sas","aa",")Z","ZZ","‘","’","“","”",

 "å",  "ƒ",  "„",   "…",   "†",   "‡",   "ˆ",   "‰",   "Š",   "‹",

 "¶+",   "d+", "[+k","[+", "x+",  "T+",  "t+", "M+", "<+", "Q+", ";+", "j+", "u+",
 "Ùk", "Ù", "ä", "–", "—","é","™","=kk","f=k",

 "à",   "á",    "â",   "ã",   "ºz",  "º",   "í", "{k", "{", "=",  "«",
 "Nî",   "Vî",    "Bî",   "Mî",   "<î", "|", "K", "}",
 "J",   "Vª",   "Mª",  "<ªª",  "Nª",   "Ø",  "Ý", "nzZ",  "æ", "ç", "Á", "xz", "#", ":",

 "v‚","vks",  "vkS",  "vk",    "v",  "b±", "Ã",  "bZ",  "b",  "m",  "Å",  ",s",  ",",   "_",

 "ô",  "d", "Dk", "D", "[k", "[", "x","Xk", "X", "Ä", "?k", "?",   "³",
 "pkS",  "p", "Pk", "P",  "N",  "t", "Tk", "T",  ">", "÷", "¥",

 "ê",  "ë",   "V",  "B",   "ì",   "ï", "M+", "<+", "M",  "<", ".k", ".",
 "r",  "Rk", "R",   "Fk", "F",  ")", "n", "/k", "èk",  "/", "Ë", "è", "u", "Uk", "U",

 "i",  "Ik", "I",   "Q",    "¶",  "c", "Ck",  "C",  "Hk",  "H", "e", "Ek",  "E",
 ";",  "¸",   "j",    "y", "Yk",  "Y",  "G",  "o", "Ok", "O",
 "'k", "'",   "\"k",  "\"",  "l", "Lk",  "L",   "g",

 "È", "z",
 "Ì", "Í", "Î",  "Ï",  "Ñ",  "Ò",  "Ó",  "Ô",   "Ö",  "Ø",  "Ù","Ük", "Ü",

 "‚",    "ks",   "kS",   "k",  "h",    "q",   "w",   "`",    "s",    "S",
 "a",    "¡",    "%",     "W",  "•", "·", "∙", "·", "~j",  "~", "\\","+"," ः",
 "^", "*",  "Þ", "ß", "(", "¼", "½", "¿", "À", "¾", "A", "-", "&", "&", "Œ", "]","~ ","@")

 var array_two = new Array(
 //"¼","½",
 "॰","QZ+","sa","a","र्द्ध","Z","\"","\"","'","'",

 "०",  "१",  "२",  "३",     "४",   "५",  "६",   "७",   "८",   "९",

 "फ़्",  "क़",  "ख़", "ख़्",  "ग़", "ज़्", "ज़",  "ड़",  "ढ़",   "फ़",  "य़",  "ऱ",  "ऩ",    // one-byte nukta varNas
 "त्त", "त्त्", "क्त",  "दृ",  "कृ","न्न","न्न्","=k","f=",

 "ह्न",  "ह्य",  "हृ",  "ह्म",  "ह्र",  "ह्",   "द्द",  "क्ष", "क्ष्", "त्र", "त्र्",
 "छ्य",  "ट्य",  "ठ्य",  "ड्य",  "ढ्य", "द्य", "ज्ञ", "द्व",
 "श्र",  "ट्र",    "ड्र",    "ढ्र",    "छ्र",   "क्र",  "फ्र", "र्द्र",  "द्र",   "प्र", "प्र",  "ग्र", "रु",  "रू",

 "ऑ",   "ओ",  "औ",  "आ",   "अ", "ईं", "ई",  "ई",   "इ",  "उ",   "ऊ",  "ऐ",  "ए", "ऋ",

 "क्क", "क", "क", "क्", "ख", "ख्", "ग", "ग", "ग्", "घ", "घ", "घ्", "ङ",
 "चै",  "च", "च", "च्", "छ", "ज", "ज", "ज्",  "झ",  "झ्", "ञ",

 "ट्ट",   "ट्ठ",   "ट",   "ठ",   "ड्ड",   "ड्ढ",  "ड़", "ढ़", "ड",   "ढ", "ण", "ण्",
 "त", "त", "त्", "थ", "थ्",  "द्ध",  "द", "ध", "ध", "ध्", "ध्", "ध्", "न", "न", "न्",

 "प", "प", "प्",  "फ", "फ्",  "ब", "ब", "ब्",  "भ", "भ्",  "म",  "म", "म्",
 "य", "य्",  "र", "ल", "ल", "ल्",  "ळ",  "व", "व", "व्",
 "श", "श्",  "ष", "ष्", "स", "स", "स्", "ह",

 "ीं", "्र",
 "द्द", "ट्ट","ट्ठ","ड्ड","कृ","भ","्य","ड्ढ","झ्","क्र","त्त्","श","श्",

 "ॉ",  "ो",   "ौ",   "ा",   "ी",   "ु",   "ू",   "ृ",   "े",   "ै",
 "ं",   "ँ",   "ः",   "ॅ",  "ऽ", "ऽ", "ऽ", "ऽ", "्र",  "्", "?", "़",":",
 "‘",   "’",   "“",   "”",  ";",  "(",    ")",   "{",    "}",   "=", "।", ".", "-",  "µ", "॰", ",","् ","/")

 //Corrections for Spelling mistakes (see above under the first Array):
 // "sas","aa","ZZ","=kk","f=k",
 //
 // The following two characters are to be replaced through proper checking of locations:
 // "Z" )
 // "र्" (reph)

 // "f" )
 // "ि"


 var array_one_length = array_one.length ;

 var modified_substring = stringtochange ;

 //****************************************************************************************
 //  Break the long text into small bunches of max. max_text_size  characters each.
 //****************************************************************************************
     var text_size = stringtochange.length ;

     var processed_text = '' ;  //blank

     var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;

     var max_text_size = 6000;

     while ( chale_chalo == 1 )
     {
      sthiti1 = sthiti2 ;

      if ( sthiti2 < ( text_size - max_text_size ) )
      {
       sthiti2 +=  max_text_size ;
       while (stringtochange.charAt ( sthiti2 ) != ' ') {sthiti2--;}
      }
      else  { sthiti2 = text_size  ;  chale_chalo = 0 }

      var modified_substring = stringtochange.substring ( sthiti1, sthiti2 )  ;

      //substitute array_two elements in place of corresponding array_one elements

      if ( modified_substring != "" )  // if stringto be converted is non-blank then no need of any processing.
      {
      for ( var input_symbol_idx = 0;   input_symbol_idx < array_one_length;    input_symbol_idx++ )

      {

      var idx = 0  ;  // index of the symbol being searched for replacement

      while (idx != -1 ) //whie-00
      {

      modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
      idx = modified_substring.indexOf( array_one[input_symbol_idx] )

      } // end of while-00 loop
      } // end of for loop

      //**********************************************************************************
      // Code for Replacing five Special glyphs
      //**********************************************************************************

      //**********************************************************************************
      // Code for Glyph1 : ± (reph+anusvAr)
      //**********************************************************************************
         modified_substring = modified_substring.replace( /±/g , "Zं" ) ; // at some places  ì  is  used eg  in "कर्कंधु,पूर्णांक".
      //
      //**********************************************************************************
      // Glyp2: Æ
      // code for replacing "f" with "ि" and correcting its position too. (moving it one position forward)
      //**********************************************************************************

      modified_substring = modified_substring.replace( /Æ/g , "र्f" ) ;  // at some places  Æ  is  used eg  in "धार्मिक".

      var position_of_i = modified_substring.indexOf( "f" )

      while ( position_of_i != -1 )  //while-02
      {
      var charecter_next_to_i = modified_substring.charAt( position_of_i + 1 )
      var charecter_to_be_replaced = "f" + charecter_next_to_i
      modified_substring = modified_substring.replace( charecter_to_be_replaced , charecter_next_to_i + "ि" )
      position_of_i = modified_substring.search( /f/ , position_of_i + 1 ) // search for i ahead of the current position.

      } // end of while-02 loop

      //**********************************************************************************
      // Glyph3 & Glyph4: Ç  É
      // code for replacing "fa" with "िं"  and correcting its position too.(moving it two positions forward)
      //**********************************************************************************

      modified_substring = modified_substring.replace( /Ç/g , "fa" ) ; // at some places  Ç  is  used eg  in "किंकर".
      modified_substring = modified_substring.replace( /É/g , "र्fa" ) ; // at some places  É  is  used eg  in "शर्मिंदा"

      var position_of_i = modified_substring.indexOf( "fa" )

      while ( position_of_i != -1 )  //while-02
      {
      var charecter_next_to_ip2 = modified_substring.charAt( position_of_i + 2 )
      var charecter_to_be_replaced = "fa" + charecter_next_to_ip2
      modified_substring = modified_substring.replace( charecter_to_be_replaced , charecter_next_to_ip2 + "िं" )
      position_of_i = modified_substring.search( /fa/ , position_of_i + 2 ) // search for i ahead of the current position.

      } // end of while-02 loop

      //**********************************************************************************
      // Glyph5: Ê
      // code for replacing "h" with "ी"  and correcting its position too.(moving it one positions forward)
      //**********************************************************************************

      modified_substring = modified_substring.replace( /Ê/g , "ीZ" ) ; // at some places  Ê  is  used eg  in "किंकर".


      /*
      var position_of_i = modified_substring.indexOf( "h" )

      while ( position_of_i != -1 )  //while-02
      {
      var charecter_next_to_i = modified_substring.charAt( position_of_i + 1 )
      var charecter_to_be_replaced = "h" + charecter_next_to_i
      modified_substring = modified_substring.replace( charecter_to_be_replaced , charecter_next_to_i + "ी" )
      position_of_i = modified_substring.search( /h/ , position_of_i + 1 ) // search for i ahead of the current position.

      } // end of while-02 loop
      */


      //**********************************************************************************
      // End of Code for Replacing four Special glyphs
      //**********************************************************************************

      // following loop to eliminate 'chhotee ee kee maatraa' on half-letters as a result of above transformation.

      var position_of_wrong_ee = modified_substring.indexOf( "ि्" )

      while ( position_of_wrong_ee != -1 )  //while-03

      {
      var consonent_next_to_wrong_ee = modified_substring.charAt( position_of_wrong_ee + 2 )
      var charecter_to_be_replaced = "ि्" + consonent_next_to_wrong_ee
      modified_substring = modified_substring.replace( charecter_to_be_replaced , "्" + consonent_next_to_wrong_ee + "ि" )
      position_of_wrong_ee = modified_substring.search( /ि्/ , position_of_wrong_ee + 2 ) // search for 'wrong ee' ahead of the current position.

      } // end of while-03 loop

      //**************************************
      //
      //**************************************
      //   alert(modified_substring);
      //**************************************

      // Eliminating reph "Z" and putting 'half - r' at proper position for this.
      var set_of_matras = "अ आ इ ई उ ऊ ए ऐ ओ औ ा ि ी ु ू ृ े ै ो ौ ं : ँ ॅ"
      var position_of_R = modified_substring.indexOf( "Z" )
      var probable_position_of_half_r;
      while ( position_of_R > 0 )  // while-04
      {
      probable_position_of_half_r = position_of_R - 1 ;
      var charecter_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r )


      // trying to find non-maatra position left to current O (ie, half -r).

      while ( set_of_matras.match( charecter_at_probable_position_of_half_r ) != null )  // while-05

      {
      probable_position_of_half_r = probable_position_of_half_r - 1 ;
      charecter_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r ) ;

      } // end of while-05


      charecter_to_be_replaced = modified_substring.substr ( probable_position_of_half_r , ( position_of_R - probable_position_of_half_r ) ) ;
      var new_replacement_string = "र्" + charecter_to_be_replaced ;
      charecter_to_be_replaced = charecter_to_be_replaced + "Z" ;
      modified_substring = modified_substring.replace( charecter_to_be_replaced , new_replacement_string ) ;
      position_of_R = modified_substring.indexOf( "Z" ) ;

      } // end of while-04

      } // end of IF  statement  meant to  supress processing of  blank  string.

      //**************************************
      //   alert(modified_substring);
      //**************************************

     processed_text += modified_substring ;

 //****************************************************************************************
 //  Breaking part code over
 //****************************************************************************************
 //  processed_text = processed_text.replace( /mangal/g , "Krutidev010" ) ;

     return (processed_text)  ;
    }


 // --------------------------------------------------
 // end of the function  Replace_Symbols


 } // end of Kritidev_to_unicode function


 handleInputChange(event){

     this.setState(({ hindi }) => (
       {
         hindi: !hindi
       }
     ));
 }
 updateState(){
   this.setState(() => (
     {
       songNum: this.props.lastId.id+1,
       newNum:this.refs.newNum.value,
       oldNum:this.refs.oldNum.value,
       songName:this.refs.songName.value,
       lyrics:this.refs.lyrics.value
     }
   ));
 }
 findBySongNum(songNum){
   for (var i; i<this.props.songs.length; i++){
     if(this.props.songs[i].songNum==songNum){
       return {songState:this.props.songs[i],index: i};
     }
   }
   return {songState: initialState, index: null};
 }
 addsongClicked(e){
    e.preventDefault();

   this.props.addSong(this.state,this.props.lastId.id);
   this.state = initialState;
   this.setState({
     hindi: this.refs.checkHindi.checked
   });
 }
 enter(e){
   if(e.which==13){
     this.addsongClicked(e);
   }
 }
  /*changeLanguage(){
    if(this.state.isChecked){
      this.refs.lyrics.value = sandrbox.convert_to_unicode(this.refs.lyrics.value);
    }
    else {

      this.refs.lyrics.value = sandrbox.Convert_to_Kritidev_010(this.refs.lyrics.value);

    }
  }*/
    render() {
        return (
            <div className="addSong">
              <h3>Add New Song</h3>
              <form>

                              <div>
                                <input ref="checkHindi" type="checkbox" className="checkHindi"
                                 onChange={this.handleInputChange}
                                 />
                                Hindi
                              </div>
              <label>New No.</label>
                <input onKeyPress={(e)=>this.enter(e)} onChange={(e) => {this.updateState()}} value={this.state.newNum} ref="newNum"></input>
                <label>Old No.</label>
                <input onKeyPress={(e)=>this.enter(e)} onChange={(e) => {this.updateState()}} value={this.state.oldNum} ref="oldNum"></input>
                <label>Song Name</label>
                {!this.state.hindi? <input onKeyPress={(e)=>this.enter(e)} className='songNameInput' onChange={(e) => {this.updateState()}} ref="songName" value={this.state.songName}></input>: <input onKeyPress={(e)=>this.enter(e)} className='songNameInput' value={this.state.songName} onChange={(e) => {e.target.value=this.convert_to_unicode(e.target.value),this.updateState()}} ref="songName"></input>}
                <label>Lyrics</label>
                {!this.state.hindi? <textarea className='lyricsInput' ref="lyrics" value={this.state.lyrics} onChange={(e) => {this.updateState()}}></textarea>: <textarea className='lyricsInput' ref="lyrics" value={this.state.lyrics} onChange={(e) => {e.target.value=this.convert_to_unicode(e.target.value),this.updateState()}}></textarea>}
                <button onClick={(e)=> this.addsongClicked(e)}>Add Song</button>
              </form>
            </div>
        );
    }
}
function matchDispatchToProps(dispatch) {

      return bindActionCreators({addSong: addSong}, dispatch);
}
function mapStateToProps(state) {
  return {
    lastId: state.lastId,
    songs: state.songs
  };
}
export default connect(mapStateToProps,matchDispatchToProps)(AddSong);
// "state.activeUser" is set in reducers/index.js
/*function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
*/
