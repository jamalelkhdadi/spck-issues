!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports","vscode-nls"],t)}(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=t("vscode-nls").loadMessageBundle();!function(t){t[t.StartCommentTag=0]="StartCommentTag",t[t.Comment=1]="Comment",t[t.EndCommentTag=2]="EndCommentTag",t[t.StartTagOpen=3]="StartTagOpen",t[t.StartTagClose=4]="StartTagClose",t[t.StartTagSelfClose=5]="StartTagSelfClose",t[t.StartTag=6]="StartTag",t[t.EndTagOpen=7]="EndTagOpen",t[t.EndTagClose=8]="EndTagClose",t[t.EndTag=9]="EndTag",t[t.DelimiterAssign=10]="DelimiterAssign",t[t.AttributeName=11]="AttributeName",t[t.AttributeValue=12]="AttributeValue",t[t.StartDoctypeTag=13]="StartDoctypeTag",t[t.Doctype=14]="Doctype",t[t.EndDoctypeTag=15]="EndDoctypeTag",t[t.Content=16]="Content",t[t.Whitespace=17]="Whitespace",t[t.Unknown=18]="Unknown",t[t.Script=19]="Script",t[t.Styles=20]="Styles",t[t.EOS=21]="EOS"}(n=e.TokenType||(e.TokenType={}));var r,o=function(){function t(t,e){this.source=t,this.len=t.length,this.position=e}return t.prototype.eos=function(){return this.len<=this.position},t.prototype.getSource=function(){return this.source},t.prototype.pos=function(){return this.position},t.prototype.goBackTo=function(t){this.position=t},t.prototype.goBack=function(t){this.position-=t},t.prototype.advance=function(t){this.position+=t},t.prototype.goToEnd=function(){this.position=this.source.length},t.prototype.nextChar=function(){return this.source.charCodeAt(this.position++)||0},t.prototype.peekChar=function(t){return void 0===t&&(t=0),this.source.charCodeAt(this.position+t)||0},t.prototype.advanceIfChar=function(t){return t===this.source.charCodeAt(this.position)&&(this.position++,!0)},t.prototype.advanceIfChars=function(t){var e;if(this.position+t.length>this.source.length)return!1;for(e=0;e<t.length;e++)if(this.source.charCodeAt(this.position+e)!==t[e])return!1;return this.advance(e),!0},t.prototype.advanceIfRegExp=function(t){var e=this.source.substr(this.position).match(t);return e?(this.position=this.position+e.index+e[0].length,e[0]):""},t.prototype.advanceUntilRegExp=function(t){var e=this.source.substr(this.position).match(t);return e?(this.position=this.position+e.index,e[0]):(this.goToEnd(),"")},t.prototype.advanceUntilChar=function(t){for(;this.position<this.source.length;){if(this.source.charCodeAt(this.position)===t)return!0;this.advance(1)}return!1},t.prototype.advanceUntilChars=function(t){for(;this.position+t.length<=this.source.length;){for(var e=0;e<t.length&&this.source.charCodeAt(this.position+e)===t[e];e++);if(e===t.length)return!0;this.advance(1)}return this.goToEnd(),!1},t.prototype.skipWhitespace=function(){return this.advanceWhileChar(function(t){return t===T||t===v||t===f||t===l||t===C})>0},t.prototype.advanceWhileChar=function(t){for(var e=this.position;this.position<this.len&&t(this.source.charCodeAt(this.position));)this.position++;return this.position-e},t}(),a="!".charCodeAt(0),s="-".charCodeAt(0),c="<".charCodeAt(0),h=">".charCodeAt(0),p="/".charCodeAt(0),u="=".charCodeAt(0),d='"'.charCodeAt(0),g="'".charCodeAt(0),f="\n".charCodeAt(0),C="\r".charCodeAt(0),l="\f".charCodeAt(0),T=" ".charCodeAt(0),v="\t".charCodeAt(0);!function(t){t[t.WithinContent=0]="WithinContent",t[t.AfterOpeningStartTag=1]="AfterOpeningStartTag",t[t.AfterOpeningEndTag=2]="AfterOpeningEndTag",t[t.WithinDoctype=3]="WithinDoctype",t[t.WithinTag=4]="WithinTag",t[t.WithinEndTag=5]="WithinEndTag",t[t.WithinComment=6]="WithinComment",t[t.WithinScriptContent=7]="WithinScriptContent",t[t.WithinStyleContent=8]="WithinStyleContent",t[t.AfterAttributeName=9]="AfterAttributeName",t[t.BeforeAttributeValue=10]="BeforeAttributeValue"}(r=e.ScannerState||(e.ScannerState={}));var W={"text/x-handlebars-template":!0};e.createScanner=function(t,e,f){function C(){return x.advanceIfRegExp(/^[_:\w][_:\w-.\d]*/).toLowerCase()}function l(){return x.advanceIfRegExp(/^[^\s"'>/=\x00-\x0F\x7F\x80-\x9F]*/).toLowerCase()}function T(t,e,n){return O=e,b=t,S=n,e}function v(){var t=x.pos();if(x.eos())return T(t,n.EOS);var e;switch(k){case r.WithinComment:return x.advanceIfChars([s,s,h])?(k=r.WithinContent,T(t,n.EndCommentTag)):(x.advanceUntilChars([s,s,h]),T(t,n.Comment));case r.WithinDoctype:return x.advanceIfChar(h)?(k=r.WithinContent,T(t,n.EndDoctypeTag)):(x.advanceUntilChar(h),T(t,n.Doctype));case r.WithinContent:if(x.advanceIfChar(c)){if(!x.eos()&&x.peekChar()===a){if(x.advanceIfChars([a,s,s]))return k=r.WithinComment,T(t,n.StartCommentTag);if(x.advanceIfRegExp(/^!doctype/i))return k=r.WithinDoctype,T(t,n.StartDoctypeTag)}return x.advanceIfChar(p)?(k=r.AfterOpeningEndTag,T(t,n.EndTagOpen)):(k=r.AfterOpeningStartTag,T(t,n.StartTagOpen))}return x.advanceUntilChar(c),T(t,n.Content);case r.AfterOpeningEndTag:return C().length>0?(k=r.WithinEndTag,T(t,n.EndTag)):x.skipWhitespace()?T(t,n.Whitespace,i("error.unexpectedWhitespace","Tag name must directly follow the open bracket.")):(k=r.WithinEndTag,x.advanceUntilChar(h),t<x.pos()?T(t,n.Unknown,i("error.endTagNameExpected","End tag name expected.")):v());case r.WithinEndTag:if(x.skipWhitespace())return T(t,n.Whitespace);if(x.advanceIfChar(h))return k=r.WithinContent,T(t,n.EndTagClose);e=i("error.tagNameExpected","Closing bracket expected.");break;case r.AfterOpeningStartTag:return y=C(),E=void 0,A=void 0,y.length>0?(m=!1,k=r.WithinTag,T(t,n.StartTag)):x.skipWhitespace()?T(t,n.Whitespace,i("error.unexpectedWhitespace","Tag name must directly follow the open bracket.")):(k=r.WithinTag,x.advanceUntilChar(h),t<x.pos()?T(t,n.Unknown,i("error.startTagNameExpected","Start tag name expected.")):v());case r.WithinTag:return x.skipWhitespace()?(m=!0,T(t,n.Whitespace)):m&&(A=l()).length>0?(k=r.AfterAttributeName,m=!1,T(t,n.AttributeName)):x.advanceIfChars([p,h])?(k=r.WithinContent,T(t,n.StartTagSelfClose)):x.advanceIfChar(h)?(k="script"===y?E&&W[E]?r.WithinContent:r.WithinScriptContent:"style"===y?r.WithinStyleContent:r.WithinContent,T(t,n.StartTagClose)):(x.advance(1),T(t,n.Unknown,i("error.unexpectedCharacterInTag","Unexpected character in tag.")));case r.AfterAttributeName:return x.skipWhitespace()?(m=!0,T(t,n.Whitespace)):x.advanceIfChar(u)?(k=r.BeforeAttributeValue,T(t,n.DelimiterAssign)):(k=r.WithinTag,v());case r.BeforeAttributeValue:if(x.skipWhitespace())return T(t,n.Whitespace);var o=x.advanceIfRegExp(/^[^\s"'`=<>\/]+/);if(o.length>0)return"type"===A&&(E=o),k=r.WithinTag,m=!1,T(t,n.AttributeValue);var f=x.peekChar();return f===g||f===d?(x.advance(1),x.advanceUntilChar(f)&&x.advance(1),"type"===A&&(E=x.getSource().substring(t+1,x.pos()-1)),k=r.WithinTag,m=!1,T(t,n.AttributeValue)):(k=r.WithinTag,m=!1,v());case r.WithinScriptContent:for(var S=1;!x.eos();){var b=x.advanceIfRegExp(/<!--|-->|<\/?script\s*\/?>?/i);if(0===b.length)return x.goToEnd(),T(t,n.Script);if("\x3c!--"===b)1===S&&(S=2);else if("--\x3e"===b)S=1;else if("/"!==b[1])2===S&&(S=3);else{if(3!==S){x.goBack(b.length);break}S=2}}return k=r.WithinContent,t<x.pos()?T(t,n.Script):v();case r.WithinStyleContent:return x.advanceUntilRegExp(/<\/style/i),k=r.WithinContent,t<x.pos()?T(t,n.Styles):v()}return x.advance(1),k=r.WithinContent,T(t,n.Unknown,e)}void 0===e&&(e=0),void 0===f&&(f=r.WithinContent);var S,m,y,A,E,x=new o(t,e),k=f,b=0,O=n.Unknown;return{scan:function(){var t=x.pos(),e=k,i=v();return i!==n.EOS&&t===x.pos()?(console.log("Scanner.scan has not advanced at offset "+t+", state before: "+e+" after: "+k),x.advance(1),T(t,n.Unknown)):i},getTokenType:function(){return O},getTokenOffset:function(){return b},getTokenLength:function(){return x.pos()-b},getTokenEnd:function(){return x.pos()},getTokenText:function(){return x.getSource().substring(b,x.pos())},getScannerState:function(){return k},getTokenError:function(){return S}}}});