/*
                   GNU LESSER GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.


  This version of the GNU Lesser General Public License incorporates
the terms and conditions of version 3 of the GNU General Public
License, supplemented by the additional permissions listed below.

  0. Additional Definitions.

  As used herein, "this License" refers to version 3 of the GNU Lesser
General Public License, and the "GNU GPL" refers to version 3 of the GNU
General Public License.

  "The Library" refers to a covered work governed by this License,
other than an Application or a Combined Work as defined below.

  An "Application" is any work that makes use of an interface provided
by the Library, but which is not otherwise based on the Library.
Defining a subclass of a class defined by the Library is deemed a mode
of using an interface provided by the Library.

  A "Combined Work" is a work produced by combining or linking an
Application with the Library.  The particular version of the Library
with which the Combined Work was made is also called the "Linked
Version".

  The "Minimal Corresponding Source" for a Combined Work means the
Corresponding Source for the Combined Work, excluding any source code
for portions of the Combined Work that, considered in isolation, are
based on the Application, and not on the Linked Version.

  The "Corresponding Application Code" for a Combined Work means the
object code and/or source code for the Application, including any data
and utility programs needed for reproducing the Combined Work from the
Application, but excluding the System Libraries of the Combined Work.

  1. Exception to Section 3 of the GNU GPL.

  You may convey a covered work under sections 3 and 4 of this License
without being bound by section 3 of the GNU GPL.

  2. Conveying Modified Versions.

  If you modify a copy of the Library, and, in your modifications, a
facility refers to a function or data to be supplied by an Application
that uses the facility (other than as an argument passed when the
facility is invoked), then you may convey a copy of the modified
version:

   a) under this License, provided that you make a good faith effort to
   ensure that, in the event an Application does not supply the
   function or data, the facility still operates, and performs
   whatever part of its purpose remains meaningful, or

   b) under the GNU GPL, with none of the additional permissions of
   this License applicable to that copy.

  3. Object Code Incorporating Material from Library Header Files.

  The object code form of an Application may incorporate material from
a header file that is part of the Library.  You may convey such object
code under terms of your choice, provided that, if the incorporated
material is not limited to numerical parameters, data structure
layouts and accessors, or small macros, inline functions and templates
(ten or fewer lines in length), you do both of the following:

   a) Give prominent notice with each copy of the object code that the
   Library is used in it and that the Library and its use are
   covered by this License.

   b) Accompany the object code with a copy of the GNU GPL and this license
   document.

  4. Combined Works.

  You may convey a Combined Work under terms of your choice that,
taken together, effectively do not restrict modification of the
portions of the Library contained in the Combined Work and reverse
engineering for debugging such modifications, if you also do each of
the following:

   a) Give prominent notice with each copy of the Combined Work that
   the Library is used in it and that the Library and its use are
   covered by this License.

   b) Accompany the Combined Work with a copy of the GNU GPL and this license
   document.

   c) For a Combined Work that displays copyright notices during
   execution, include the copyright notice for the Library among
   these notices, as well as a reference directing the user to the
   copies of the GNU GPL and this license document.

   d) Do one of the following:

       0) Convey the Minimal Corresponding Source under the terms of this
       License, and the Corresponding Application Code in a form
       suitable for, and under terms that permit, the user to
       recombine or relink the Application with a modified version of
       the Linked Version to produce a modified Combined Work, in the
       manner specified by section 6 of the GNU GPL for conveying
       Corresponding Source.

       1) Use a suitable shared library mechanism for linking with the
       Library.  A suitable mechanism is one that (a) uses at run time
       a copy of the Library already present on the user's computer
       system, and (b) will operate properly with a modified version
       of the Library that is interface-compatible with the Linked
       Version.

   e) Provide Installation Information, but only if you would otherwise
   be required to provide such information under section 6 of the
   GNU GPL, and only to the extent that such information is
   necessary to install and execute a modified version of the
   Combined Work produced by recombining or relinking the
   Application with a modified version of the Linked Version. (If
   you use option 4d0, the Installation Information must accompany
   the Minimal Corresponding Source and Corresponding Application
   Code. If you use option 4d1, you must provide the Installation
   Information in the manner specified by section 6 of the GNU GPL
   for conveying Corresponding Source.)

  5. Combined Libraries.

  You may place library facilities that are a work based on the
Library side by side in a single library together with other library
facilities that are not Applications and are not covered by this
License, and convey such a combined library under terms of your
choice, if you do both of the following:

   a) Accompany the combined library with a copy of the same work based
   on the Library, uncombined with any other library facilities,
   conveyed under the terms of this License.

   b) Give prominent notice with the combined library that part of it
   is a work based on the Library, and explaining where to find the
   accompanying uncombined form of the same work.

  6. Revised Versions of the GNU Lesser General Public License.

  The Free Software Foundation may publish revised and/or new versions
of the GNU Lesser General Public License from time to time. Such new
versions will be similar in spirit to the present version, but may
differ in detail to address new problems or concerns.

  Each version is given a distinguishing version number. If the
Library as you received it specifies that a certain numbered version
of the GNU Lesser General Public License "or any later version"
applies to it, you have the option of following the terms and
conditions either of that published version or of any later version
published by the Free Software Foundation. If the Library as you
received it does not specify a version number of the GNU Lesser
General Public License, you may choose any version of the GNU Lesser
General Public License ever published by the Free Software Foundation.

  If the Library as you received it specifies that a proxy can decide
whether future versions of the GNU Lesser General Public License shall
apply, that proxy's public statement of acceptance of any version is
permanent authorization for you to choose that version for the
Library.
*/var jpeg = jpeg || {};
jpeg.lossless = jpeg.lossless || {};
"use strict";jpeg.lossless.ComponentSpec=jpeg.lossless.ComponentSpec||function(){this.hSamp=0;this.quantTableSel=0;this.vSamp=0};"use strict";jpeg.lossless.DataStream=jpeg.lossless.DataStream||function(a){this.buffer=new DataView(a);this.index=0};jpeg.lossless.DataStream.prototype.get16=function(){var a=this.buffer.getUint16(this.index,false);this.index+=2;return a};jpeg.lossless.DataStream.prototype.get8=function(){var a=this.buffer.getUint8(this.index);this.index+=1;return a};"use strict";jpeg.lossless.Decoder=jpeg.lossless.Decoder||function(a,b){this.stream=new jpeg.lossless.DataStream(a);this.frame=new jpeg.lossless.FrameHeader();this.huffTable=new jpeg.lossless.HuffmanTable();this.quantTable=new jpeg.lossless.QuantizationTable();this.scan=new jpeg.lossless.ScanHeader();this.DU=jpeg.lossless.Utils.createArray(10,4,64);this.HuffTab=jpeg.lossless.Utils.createArray(4,2,50*256);this.IDCT_Source=[];this.nBlock=[];this.acTab=jpeg.lossless.Utils.createArray(10,1);this.dcTab=jpeg.lossless.Utils.createArray(10,1);this.qTab=jpeg.lossless.Utils.createArray(10,1);this.marker=0;this.markerIndex=0;this.numComp=0;this.restartInterval=0;this.selection=0;this.xDim=0;this.yDim=0;this.xLoc=0;this.yLoc=0;this.outputData=null;if(typeof b==="undefined"){this.numBytes=2}else{this.numBytes=b}if(this.numBytes===2){this.getter=this.getValue16;this.setter=this.setValue16}else{if(this.numBytes===1){this.getter=this.getValue8;this.setter=this.setValue8}}};jpeg.lossless.Decoder.IDCT_P=[0,5,40,16,45,2,7,42,21,56,8,61,18,47,1,4,41,23,58,13,32,24,37,10,63,17,44,3,6,43,20,57,15,34,29,48,53,26,39,9,60,19,46,22,59,12,33,31,50,55,25,36,11,62,14,35,28,49,52,27,38,30,51,54];jpeg.lossless.Decoder.TABLE=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63];jpeg.lossless.Decoder.MAX_HUFFMAN_SUBTREE=50;jpeg.lossless.Decoder.MSB=2147483648;jpeg.lossless.Decoder.prototype.decode=function(){var h,g=0,b=[],f,e,a=[],d=[],c;this.xLoc=0;this.yLoc=0;h=this.stream.get16();if(h!==65496){this.error="Not a JPEG file"}h=this.stream.get16();while((((h>>4)!==4092)||(h===65476))){switch(h){case 65476:this.huffTable.read(this.stream,this.HuffTab);break;case 65484:throw new Error("Program doesn't support arithmetic coding. (format throw new IOException)");case 65499:this.quantTable.read(this.stream,jpeg.lossless.Decoder.TABLE);break;case 65501:this.restartInterval=this.readNumber();break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:this.readApp();break;case 65534:this.readComment();break;default:if((h>>8)!==255){throw new Error("ERROR: format throw new IOException! (decode)")}}h=this.stream.get16()}if((h<65472)||(h>65479)){throw new Error("ERROR: could not handle arithmetic code!")}this.frame.read(this.stream);h=this.stream.get16();do{while(h!==65498){switch(h){case 65476:this.huffTable.read(this.stream,this.HuffTab);break;case 65484:throw new Error("Program doesn't support arithmetic coding. (format throw new IOException)");case 65499:this.quantTable.read(this.stream,jpeg.lossless.Decoder.TABLE);break;case 65501:this.restartInterval=this.readNumber();break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:this.readApp();break;case 65534:this.readComment();break;default:if((h>>8)!==255){throw new Error("ERROR: format throw new IOException! (Parser.decode)")}}h=this.stream.get16()}this.precision=this.frame.precision;this.components=this.frame.components;this.scan.read(this.stream);this.numComp=this.scan.numComp;this.selection=this.scan.selection;this.scanComps=this.scan.components;this.quantTables=this.quantTable.quantTables;for(f=0;f<this.numComp;f+=1){e=this.scanComps[f].scanCompSel;this.qTab[f]=this.quantTables[this.components[e].quantTableSel];this.nBlock[f]=this.components[e].vSamp*this.components[e].hSamp;this.dcTab[f]=this.HuffTab[this.scanComps[f].dcTabSel][0];this.acTab[f]=this.HuffTab[this.scanComps[f].acTabSel][1]}this.xDim=this.frame.dimX;this.yDim=this.frame.dimY;this.outputData=new DataView(new ArrayBuffer(this.xDim*this.yDim*this.numBytes));g+=1;while(true){a[0]=0;d[0]=0;for(f=0;f<10;f+=1){b[f]=(1<<(this.precision-1))}if(this.restartInterval===0){h=this.decodeUnit(b,a,d);while((h===0)&&((this.xLoc<this.xDim)&&(this.yLoc<this.yDim))){this.output(b);h=this.decodeUnit(b,a,d)}break}for(c=0;c<this.restartInterval;c+=1){h=this.decodeUnit(b,a,d);this.output(b);if(h!==0){break}}if(h===0){if(this.markerIndex!==0){h=(65280|this.marker);this.markerIndex=0}else{h=this.stream.get16()}}if(!((h>=65488)&&(h<=65495))){break}}if((h===65500)&&(g===1)){this.readNumber();h=this.stream.get16()}}while((h!==65497)&&((this.xLoc<this.xDim)&&(this.yLoc<this.yDim))&&(g===0));return this.outputData};jpeg.lossless.Decoder.prototype.decodeUnit=function(a,m,e){var h,n,f,g,l,d,b,c;switch(this.selection){case 2:a[0]=this.getPreviousY();break;case 3:a[0]=this.getPreviousXY();break;case 4:a[0]=(this.getPreviousX()+this.getPreviousY())-this.getPreviousXY();break;case 5:a[0]=this.getPreviousX()+((this.getPreviousY()-this.getPreviousXY())>>1);break;case 6:a[0]=this.getPreviousY()+((this.getPreviousX()-this.getPreviousXY())>>1);break;case 7:a[0]=((this.getPreviousX()+this.getPreviousY())/2);break;default:a[0]=this.getPreviousX();break}if(this.numComp>1){for(l=0;l<this.numComp;l+=1){g=this.qTab[l];n=this.acTab[l];f=this.dcTab[l];for(d=0;d<this.nBlock[l];d+=1){for(b=0;b<this.IDCT_Source.length;b+=1){this.IDCT_Source[b]=0}h=this.getHuffmanValue(f,m,e);if(h>=65280){return h}a[l]=this.IDCT_Source[0]=a[l]+this.getn(e,h,m,e);this.IDCT_Source[0]*=g[0];for(c=1;c<64;c+=1){h=this.getHuffmanValue(n,m,e);if(h>=65280){return h}c+=(h>>4);if((h&15)===0){if((h>>4)===0){break}}else{this.IDCT_Source[jpeg.lossless.Decoder.IDCT_P[c]]=this.getn(e,h&15,m,e)*g[c]}}this.scaleIDCT(this.DU[l][d])}}return 0}else{for(d=0;d<this.nBlock[0];d+=1){h=this.getHuffmanValue(this.dcTab[0],m,e);if(h>=65280){return h}a[0]+=this.getn(a,h,m,e)}return 0}};jpeg.lossless.Decoder.prototype.getHuffmanValue=function(f,c,d){var e,b,a;a=65535;if(d[0]<8){c[0]<<=8;b=this.stream.get8();if(b===255){this.marker=this.stream.get8();if(this.marker!==0){this.markerIndex=9}}c[0]|=b}else{d[0]-=8}e=f[c[0]>>d[0]];if((e&jpeg.lossless.Decoder.MSB)!==0){if(this.markerIndex!==0){this.markerIndex=0;return 65280|this.marker}c[0]&=(a>>(16-d[0]));c[0]<<=8;b=this.stream.get8();if(b===255){this.marker=this.stream.get8();if(this.marker!==0){this.markerIndex=9}}c[0]|=b;e=f[((e&255)*256)+(c[0]>>d[0])];d[0]+=8}d[0]+=8-(e>>8);if(d[0]<0){throw new Error("index="+d[0]+" temp="+c[0]+" code="+e+" in HuffmanValue()")}if(d[0]<this.markerIndex){this.markerIndex=0;return 65280|this.marker}c[0]&=(a>>(16-d[0]));return e&255};jpeg.lossless.Decoder.prototype.getn=function(g,b,f,d){var i,c,a,h,e;c=1;a=-1;h=65535;if(b===0){return 0}if(b===16){if(g[0]>=0){return -32768}else{return 32768}}d[0]-=b;if(d[0]>=0){if((d[0]<this.markerIndex)&&!this.isLastPixel()){this.markerIndex=0;return(65280|this.marker)<<8}i=f[0]>>d[0];f[0]&=(h>>(16-d[0]))}else{f[0]<<=8;e=this.stream.get8();if(e===255){this.marker=this.stream.get8();if(this.marker!==0){this.markerIndex=9}}f[0]|=e;d[0]+=8;if(d[0]<0){if(this.markerIndex!==0){this.markerIndex=0;return(65280|this.marker)<<8}f[0]<<=8;e=this.stream.get8();if(e===255){this.marker=this.stream.get8();if(this.marker!==0){this.markerIndex=9}}f[0]|=e;d[0]+=8}if(d[0]<0){throw new Error("index="+d[0]+" in getn()")}if(d[0]<this.markerIndex){this.markerIndex=0;return(65280|this.marker)<<8}i=f[0]>>d[0];f[0]&=(h>>(16-d[0]))}if(i<(c<<(b-1))){i+=(a<<b)+1}return i};jpeg.lossless.Decoder.prototype.getPreviousX=function(){if(this.xLoc>0){return this.getter((((this.yLoc*this.xDim)+this.xLoc)-1))}else{if(this.yLoc>0){return this.getPreviousY()}else{return(1<<(this.frame.precision-1))}}};jpeg.lossless.Decoder.prototype.getPreviousXY=function(){if((this.xLoc>0)&&(this.yLoc>0)){return this.getter(((((this.yLoc-1)*this.xDim)+this.xLoc)-1))}else{return this.getPreviousY()}};jpeg.lossless.Decoder.prototype.getPreviousY=function(){if(this.yLoc>0){return this.getter((((this.yLoc-1)*this.xDim)+this.xLoc))}else{return this.getPreviousX()}};jpeg.lossless.Decoder.prototype.isLastPixel=function(){return(this.xLoc===(this.xDim-1))&&(this.yLoc===(this.yDim-1))};jpeg.lossless.Decoder.prototype.output=function(a){if((this.xLoc<this.xDim)&&(this.yLoc<this.yDim)){this.setter((((this.yLoc*this.xDim)+this.xLoc)),a[0]);this.xLoc+=1;if(this.xLoc>=this.xDim){this.yLoc+=1;this.xLoc=0}}};jpeg.lossless.Decoder.prototype.setValue16=function(a,b){this.outputData.setInt16(a*2,b,true)};jpeg.lossless.Decoder.prototype.getValue16=function(a){return this.outputData.getInt16(a*2,true)};jpeg.lossless.Decoder.prototype.setValue8=function(a,b){this.outputData.setInt16(a,b,true)};jpeg.lossless.Decoder.prototype.getValue8=function(a){return this.outputData.getInt16(a,true)};jpeg.lossless.Decoder.prototype.readApp=function(){var b=0,a=this.stream.get16();b+=2;while(b<a){this.stream.get8();b+=1}return a};jpeg.lossless.Decoder.prototype.readComment=function(){var c="",b=0,a;a=this.stream.get16();b+=2;while(b<a){c+=this.stream.get8();b+=1}return c};jpeg.lossless.Decoder.prototype.readNumber=function(){var a=this.stream.get16();if(a!==4){throw new Error("ERROR: Define number format throw new IOException [Ld!=4]")}return this.stream.get16()};jpeg.lossless.Decoder.prototype.scaleIDCT=function(s){var n=[[]],m,l,k,j,t,z,y,x,w,v,u,r,q,h,g,f,e,d,c,b,a,o=0;for(t=0;t<8;t+=1){z=this.IDCT_Source[(0)+t];y=this.IDCT_Source[(8)+t];x=this.IDCT_Source[(16)+t]-this.IDCT_Source[(24)+t];w=this.IDCT_Source[(24)+t]+this.IDCT_Source[(16)+t];v=this.IDCT_Source[(32)+t]-this.IDCT_Source[(56)+t];r=this.IDCT_Source[(40)+t]-this.IDCT_Source[(48)+t];m=this.IDCT_Source[(40)+t]+this.IDCT_Source[(48)+t];l=this.IDCT_Source[(32)+t]+this.IDCT_Source[(56)+t];u=m-l;q=m+l;d=(-v*480)-(r*192);c=u*384;b=(r*480)-(v*192);a=q*256;m=z*256;l=y*256;k=x*384;j=w*256;e=j;h=m+l;g=m-l;f=k-j;z=h+e;y=g+f;x=g-f;w=h-e;v=b-d-c-a;u=(c-b)+a;r=b-a;q=a;n[0][t]=(z+q+(1<<12))>>13;n[1][t]=(y+r+(1<<12))>>13;n[2][t]=(x+u+(1<<12))>>13;n[3][t]=(w+v+(1<<12))>>13;n[4][t]=((w-v)+(1<<12))>>13;n[5][t]=((x-u)+(1<<12))>>13;n[6][t]=((y-r)+(1<<12))>>13;n[7][t]=((z-q)+(1<<12))>>13}for(t=0;t<8;t+=1){z=n[t][0];y=n[t][1];x=n[t][2]-n[t][3];w=n[t][3]+n[t][2];v=n[t][4]-n[t][7];r=n[t][5]-n[t][6];m=n[t][5]+n[t][6];l=n[t][4]+n[t][7];u=m-l;q=m+l;d=(-v*480)-(r*192);c=u*384;b=(r*480)-(v*192);a=q*256;m=z*256;l=y*256;k=x*384;j=w*256;e=j;h=m+l;g=m-l;f=k-j;z=h+e;y=g+f;x=g-f;w=h-e;v=b-d-c-a;u=(c-b)+a;r=b-a;q=a;s[o+=1]=(z+q+(1<<12))>>13;s[o+=1]=(y+r+(1<<12))>>13;s[o+=1]=(x+u+(1<<12))>>13;s[o+=1]=(w+v+(1<<12))>>13;s[o+=1]=((w-v)+(1<<12))>>13;s[o+=1]=((x-u)+(1<<12))>>13;s[o+=1]=((y-r)+(1<<12))>>13;s[o+=1]=((z-q)+(1<<12))>>13}};"use strict";jpeg.lossless.FrameHeader=jpeg.lossless.FrameHeader||function(){this.components=[];this.dimX=0;this.dimY=0;this.numComp=0;this.precision=0};jpeg.lossless.FrameHeader.prototype.read=function(f){var e=0,d,b,g,a;d=f.get16();e+=2;this.precision=f.get8();e+=1;this.dimY=f.get16();e+=2;this.dimX=f.get16();e+=2;this.numComp=f.get8();e+=1;for(b=1;b<=this.numComp;b+=1){if(e>d){throw new Error("ERROR: frame format error")}g=f.get8();e+=1;if(e>=d){throw new Error("ERROR: frame format error [c>=Lf]")}a=f.get8();e+=1;if(!this.components[g]){this.components[g]=new jpeg.lossless.ComponentSpec()}this.components[g].hSamp=a>>4;this.components[g].vSamp=a&15;this.components[g].quantTableSel=f.get8();e+=1}if(e!==d){throw new Error("ERROR: frame format error [Lf!=count]")}return 1};"use strict";jpeg.lossless.HuffmanTable=jpeg.lossless.HuffmanTable||function(){this.l=jpeg.lossless.Utils.createArray(4,2,16);this.th=[];this.v=jpeg.lossless.Utils.createArray(4,2,16,200);this.tc=jpeg.lossless.Utils.createArray(4,2);this.tc[0][0]=0;this.tc[1][0]=0;this.tc[2][0]=0;this.tc[3][0]=0;this.tc[0][1]=0;this.tc[1][1]=0;this.tc[2][1]=0;this.tc[3][1]=0;this.th[0]=0;this.th[1]=0;this.th[2]=0;this.th[3]=0};jpeg.lossless.HuffmanTable.MSB=2147483648;jpeg.lossless.HuffmanTable.prototype.read=function(d,h){var f=0,a,k,l,g,e,b;a=d.get16();f+=2;while(f<a){k=d.get8();f+=1;l=k&15;if(l>3){throw new Error("ERROR: Huffman table ID > 3")}g=k>>4;if(g>2){throw new Error("ERROR: Huffman table [Table class > 2 ]")}this.th[l]=1;this.tc[l][g]=1;for(e=0;e<16;e+=1){this.l[l][g][e]=d.get8();f+=1}for(e=0;e<16;e+=1){for(b=0;b<this.l[l][g][e];b+=1){if(f>a){throw new Error("ERROR: Huffman table format error [count>Lh]")}this.v[l][g][e][b]=d.get8();f+=1}}}if(f!==a){throw new Error("ERROR: Huffman table format error [count!=Lf]")}for(e=0;e<4;e+=1){for(b=0;b<2;b+=1){if(this.tc[e][b]!==0){this.buildHuffTable(h[e][b],this.l[e][b],this.v[e][b])}}}return 1};jpeg.lossless.HuffmanTable.prototype.buildHuffTable=function(b,g,c){var l,h,d,f,e,a;h=256;d=0;for(f=0;f<8;f+=1){for(e=0;e<g[f];e+=1){for(a=0;a<(h>>(f+1));a+=1){b[d]=c[f][e]|((f+1)<<8);d+=1}}}for(f=1;d<256;f+=1,d+=1){b[d]=f|jpeg.lossless.HuffmanTable.MSB}l=1;d=0;for(f=8;f<16;f+=1){for(e=0;e<g[f];e+=1){for(a=0;a<(h>>(f-7));a+=1){b[(l*256)+d]=c[f][e]|((f+1)<<8);d+=1}if(d>=256){if(d>256){this.error="ERROR: Huffman table error(1)!"}d=0;l+=1}}}};"use strict";jpeg.lossless.QuantizationTable=jpeg.lossless.QuantizationTable||function(){this.precision=[];this.tq=[];this.quantTables=jpeg.lossless.Utils.createArray(4,64);this.tq[0]=0;this.tq[1]=0;this.tq[2]=0;this.tq[3]=0};jpeg.lossless.QuantizationTable.enhanceQuantizationTable=function(c,b){var a;for(a=0;a<8;a+=1){c[b[(0*8)+a]]*=90;c[b[(4*8)+a]]*=90;c[b[(2*8)+a]]*=118;c[b[(6*8)+a]]*=49;c[b[(5*8)+a]]*=71;c[b[(1*8)+a]]*=126;c[b[(7*8)+a]]*=25;c[b[(3*8)+a]]*=106}for(a=0;a<8;a+=1){c[b[0+(8*a)]]*=90;c[b[4+(8*a)]]*=90;c[b[2+(8*a)]]*=118;c[b[6+(8*a)]]*=49;c[b[5+(8*a)]]*=71;c[b[1+(8*a)]]*=126;c[b[7+(8*a)]]*=25;c[b[3+(8*a)]]*=106}for(a=0;a<64;a+=1){c[a]>>=6}};jpeg.lossless.QuantizationTable.prototype.read=function(g,f){var e=0,d,a,c,b;d=g.get16();e+=2;while(e<d){a=g.get8();e+=1;c=a&15;if(c>3){throw new Error("ERROR: Quantization table ID > 3")}this.precision[c]=a>>4;if(this.precision[c]===0){this.precision[c]=8}else{if(this.precision[c]===1){this.precision[c]=16}else{throw new Error("ERROR: Quantization table precision error")}}this.tq[c]=1;if(this.precision[c]===8){for(b=0;b<64;b+=1){if(e>d){throw new Error("ERROR: Quantization table format error")}this.quantTables[c][b]=g.get8();e+=1}jpeg.lossless.QuantizationTable.enhanceQuantizationTable(this.quantTables[c],f)}else{for(b=0;b<64;b+=1){if(e>d){throw new Error("ERROR: Quantization table format error")}this.quantTables[c][b]=g.get16();e+=2}jpeg.lossless.QuantizationTable.enhanceQuantizationTable(this.quantTables[c],f)}}if(e!==d){throw new Error("ERROR: Quantization table error [count!=Lq]")}return 1};"use strict";jpeg.lossless.ScanComponent=jpeg.lossless.ScanComponent||function(){this.acTabSel=0;this.dcTabSel=0;this.scanCompSel=0};"use strict";jpeg.lossless.ScanHeader=jpeg.lossless.ScanHeader||function(){this.ah=0;this.al=0;this.numComp=0;this.selection=0;this.spectralEnd=0;this.components=[]};jpeg.lossless.ScanHeader.prototype.read=function(e){var d=0,c,b,a;c=e.get16();d+=2;this.numComp=e.get8();d+=1;for(b=0;b<this.numComp;b+=1){this.components[b]=new jpeg.lossless.ScanComponent();if(d>c){throw new Error("ERROR: scan header format error")}this.components[b].scanCompSel=e.get8();d+=1;a=e.get8();d+=1;this.components[b].dcTabSel=(a>>4);this.components[b].acTabSel=(a&15)}this.selection=e.get8();d+=1;this.spectralEnd=e.get8();d+=1;a=e.get8();this.ah=(a>>4);this.al=(a&15);d+=1;if(d!==c){throw new Error("ERROR: scan header format error [count!=Ns]")}return 1};"use strict";jpeg.lossless.Utils=jpeg.lossless.Utils||{};jpeg.lossless.Utils.createArray=function(d){var a=new Array(d||0),c=d;if(arguments.length>1){var b=Array.prototype.slice.call(arguments,1);while(c--){a[d-1-c]=jpeg.lossless.Utils.createArray.apply(this,b)}}return a};var moduleType = typeof module;
if ((moduleType !== 'undefined') && module.exports) {
   module.exports = jpeg;
}
