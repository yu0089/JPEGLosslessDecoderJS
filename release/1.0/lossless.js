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
/*
 * Copyright (C) 2015 Michael Martinez
 * Changes: Added support for selection values 2-7, fixed minor bugs &
 * warnings, split into multiple class files, and general clean up.
 */

/*
 * Copyright (C) 2003-2009 JNode.org
 * Original source: http://webuser.fh-furtwangen.de/~dersch/
 * Changed License to LGPL with the friendly permission of Helmut Dersch.
 */

/*
 * Copyright (C) Helmut Dersch
 *
 * This library is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library; If not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

/*jslint browser: true, node: true */
/*global require, module */

"use strict";

jpeg.lossless.ComponentSpec = jpeg.lossless.ComponentSpec || function () {
    this.hSamp = 0; // Horizontal sampling factor
    this.quantTableSel = 0; // Quantization table destination selector
    this.vSamp = 0; // Vertical
};


/*
 * Copyright (C) 2015 Michael Martinez
 * Changes: Added support for selection values 2-7, fixed minor bugs &
 * warnings, split into multiple class files, and general clean up.
 */

/*
 * Copyright (C) 2003-2009 JNode.org
 * Original source: http://webuser.fh-furtwangen.de/~dersch/
 * Changed License to LGPL with the friendly permission of Helmut Dersch.
 */

/*
 * Copyright (C) Helmut Dersch
 *
 * This library is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library; If not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

/*jslint browser: true, node: true */
/*global require, module */

"use strict";

jpeg.lossless.DataStream = jpeg.lossless.DataStream || function (data) {
    this.buffer = new DataView(data);
    this.index = 0;
};



jpeg.lossless.DataStream.prototype.get16 = function () {
    var value = this.buffer.getUint16(this.index, false);
    this.index += 2;
    return value;
};



jpeg.lossless.DataStream.prototype.get8 = function () {
    var value = this.buffer.getUint8(this.index);
    this.index += 1;
    return value;
};


/*
 * Copyright (C) 2015 Michael Martinez
 * Changes: Added support for selection values 2-7, fixed minor bugs &
 * warnings, split into multiple class files, and general clean up.
 */

/*
 * Copyright (C) 2003-2009 JNode.org
 * Original source: http://webuser.fh-furtwangen.de/~dersch/
 * Changed License to LGPL with the friendly permission of Helmut Dersch.
 */

/*
 * Copyright (C) Helmut Dersch
 *
 * This library is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library; If not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

/*jslint browser: true, node: true */
/*global require, module */

"use strict";

jpeg.lossless.Decoder = jpeg.lossless.Decoder || function (buffer, numBytes) {
    this.stream = new jpeg.lossless.DataStream(buffer);
    this.frame = new jpeg.lossless.FrameHeader();
    this.huffTable = new jpeg.lossless.HuffmanTable();
    this.quantTable = new jpeg.lossless.QuantizationTable();
    this.scan = new jpeg.lossless.ScanHeader();
    this.DU = jpeg.lossless.Utils.createArray(10, 4, 64); // at most 10 data units in a MCU, at most 4 data units in one component
    this.HuffTab = jpeg.lossless.Utils.createArray(4, 2, 50 * 256);
    this.IDCT_Source = [];
    this.nBlock = []; // number of blocks in the i-th Comp in a scan
    this.acTab = jpeg.lossless.Utils.createArray(10, 1); // ac HuffTab for the i-th Comp in a scan
    this.dcTab = jpeg.lossless.Utils.createArray(10, 1); // dc HuffTab for the i-th Comp in a scan
    this.qTab = jpeg.lossless.Utils.createArray(10, 1); // quantization table for the i-th Comp in a scan
    this.marker = 0;
    this.markerIndex = 0;
    this.numComp = 0;
    this.restartInterval = 0;
    this.selection = 0;
    this.xDim = 0;
    this.yDim = 0;
    this.xLoc = 0;
    this.yLoc = 0;
    this.outputData = null;

    if (typeof numBytes === "undefined") {
        this.numBytes = 2;
    } else {
        this.numBytes = numBytes;
    }

    if (this.numBytes === 2) {
        this.getter = this.getValue16;
        this.setter = this.setValue16;
    } else if (this.numBytes === 1) {
        this.getter = this.getValue8;
        this.setter = this.setValue8;
    }
};


/*** Static Pseudo-constants ***/

jpeg.lossless.Decoder.IDCT_P = [0, 5, 40, 16, 45, 2, 7, 42, 21, 56, 8, 61, 18, 47, 1, 4, 41, 23, 58, 13, 32, 24, 37, 10, 63, 17, 44, 3, 6, 43, 20,
    57, 15, 34, 29, 48, 53, 26, 39, 9, 60, 19, 46, 22, 59, 12, 33, 31, 50, 55, 25, 36, 11, 62, 14, 35, 28, 49, 52, 27, 38, 30, 51, 54];
jpeg.lossless.Decoder.TABLE = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53,
    10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63];
jpeg.lossless.Decoder.MAX_HUFFMAN_SUBTREE = 50;
jpeg.lossless.Decoder.MSB = 0x80000000;


/*** Prototype Methods ***/

jpeg.lossless.Decoder.prototype.decode = function () {
    /*jslint bitwise: true */

    var current, scanNum = 0, pred = [], i, compN, temp = [], index = [], mcuNum;

    this.xLoc = 0;
    this.yLoc = 0;
    current = this.stream.get16();

    if (current !== 0xFFD8) { // SOI
        this.error = "Not a JPEG file";
    }

    current = this.stream.get16();

    while ((((current >> 4) !== 0x0FFC) || (current === 0xFFC4))) { // SOF 0~15
        switch (current) {
            case 0xFFC4: // DHT
                this.huffTable.read(this.stream, this.HuffTab);
                break;
            case 0xFFCC: // DAC
                throw new Error("Program doesn't support arithmetic coding. (format throw new IOException)");
            case 0xFFDB:
                this.quantTable.read(this.stream, jpeg.lossless.Decoder.TABLE);
                break;
            case 0xFFDD:
                this.restartInterval = this.readNumber();
                break;
            case 0xFFE0:
            case 0xFFE1:
            case 0xFFE2:
            case 0xFFE3:
            case 0xFFE4:
            case 0xFFE5:
            case 0xFFE6:
            case 0xFFE7:
            case 0xFFE8:
            case 0xFFE9:
            case 0xFFEA:
            case 0xFFEB:
            case 0xFFEC:
            case 0xFFED:
            case 0xFFEE:
            case 0xFFEF:
                this.readApp();
                break;
            case 0xFFFE:
                this.readComment();
                break;
            default:
                if ((current >> 8) !== 0xFF) {
                    throw new Error("ERROR: format throw new IOException! (decode)");
                }
        }

        current = this.stream.get16();
    }

    if ((current < 0xFFC0) || (current > 0xFFC7)) {
        throw new Error("ERROR: could not handle arithmetic code!");
    }

    this.frame.read(this.stream);
    current = this.stream.get16();

    do {
        while (current !== 0x0FFDA) { // SOS
            switch (current) {
                case 0xFFC4: // DHT
                    this.huffTable.read(this.stream, this.HuffTab);
                    break;
                case 0xFFCC: // DAC
                    throw new Error("Program doesn't support arithmetic coding. (format throw new IOException)");
                case 0xFFDB:
                    this.quantTable.read(this.stream, jpeg.lossless.Decoder.TABLE);
                    break;
                case 0xFFDD:
                    this.restartInterval = this.readNumber();
                    break;
                case 0xFFE0:
                case 0xFFE1:
                case 0xFFE2:
                case 0xFFE3:
                case 0xFFE4:
                case 0xFFE5:
                case 0xFFE6:
                case 0xFFE7:
                case 0xFFE8:
                case 0xFFE9:
                case 0xFFEA:
                case 0xFFEB:
                case 0xFFEC:
                case 0xFFED:
                case 0xFFEE:
                case 0xFFEF:
                    this.readApp();
                    break;
                case 0xFFFE:
                    this.readComment();
                    break;
                default:
                    if ((current >> 8) !== 0xFF) {
                        throw new Error("ERROR: format throw new IOException! (Parser.decode)");
                    }
            }

            current = this.stream.get16();
        }

        this.precision = this.frame.precision;
        this.components = this.frame.components;

        this.scan.read(this.stream);
        this.numComp = this.scan.numComp;
        this.selection = this.scan.selection;

        this.scanComps = this.scan.components;
        this.quantTables = this.quantTable.quantTables;

        for (i = 0; i < this.numComp; i+=1) {
            compN = this.scanComps[i].scanCompSel;
            this.qTab[i] = this.quantTables[this.components[compN].quantTableSel];
            this.nBlock[i] = this.components[compN].vSamp * this.components[compN].hSamp;
            this.dcTab[i] = this.HuffTab[this.scanComps[i].dcTabSel][0];
            this.acTab[i] = this.HuffTab[this.scanComps[i].acTabSel][1];
        }

        this.xDim = this.frame.dimX;
        this.yDim = this.frame.dimY;
        this.outputData = new DataView(new ArrayBuffer(this.xDim * this.yDim * this.numBytes));

        scanNum+=1;

        while (true) { // Decode one scan
            temp[0] = 0;
            index[0] = 0;

            for (i = 0; i < 10; i+=1) {
                pred[i] = (1 << (this.precision - 1));
            }

            if (this.restartInterval === 0) {
                current = this.decodeUnit(pred, temp, index);

                while ((current === 0) && ((this.xLoc < this.xDim) && (this.yLoc < this.yDim))) {
                    this.output(pred);
                    current = this.decodeUnit(pred, temp, index);
                }

                break; //current=MARKER
            }

            for (mcuNum = 0; mcuNum < this.restartInterval; mcuNum+=1) {
                current = this.decodeUnit(pred, temp, index);
                this.output(pred);

                if (current !== 0) {
                    break;
                }
            }

            if (current === 0) {
                if (this.markerIndex !== 0) {
                    current = (0xFF00 | this.marker);
                    this.markerIndex = 0;
                } else {
                    current = this.stream.get16();
                }
            }

            if (!((current >= 0xFFD0) && (current <= 0xFFD7))) {
                break; //current=MARKER
            }
        }

        if ((current === 0xFFDC) && (scanNum === 1)) { //DNL
            this.readNumber();
            current = this.stream.get16();
        }
    } while ((current !== 0xFFD9) && ((this.xLoc < this.xDim) && (this.yLoc < this.yDim)) && (scanNum === 0));

    return this.outputData;
};



jpeg.lossless.Decoder.prototype.decodeUnit = function (prev, temp, index) {
    /*jslint bitwise: true */

    var value, actab, dctab, qtab, ctrC, i, k, j;

    switch (this.selection) {
        case 2:
            prev[0] = this.getPreviousY();
            break;
        case 3:
            prev[0] = this.getPreviousXY();
            break;
        case 4:
            prev[0] = (this.getPreviousX() + this.getPreviousY()) - this.getPreviousXY();
            break;
        case 5:
            prev[0] = this.getPreviousX() + ((this.getPreviousY() - this.getPreviousXY()) >> 1);
            break;
        case 6:
            prev[0] = this.getPreviousY() + ((this.getPreviousX() - this.getPreviousXY()) >> 1);
            break;
        case 7:
            prev[0] = ((this.getPreviousX() + this.getPreviousY()) / 2);
            break;
        default:
            prev[0] = this.getPreviousX();
            break;
    }

    if (this.numComp > 1) {
        for (ctrC = 0; ctrC < this.numComp; ctrC+=1) {
            qtab = this.qTab[ctrC];
            actab = this.acTab[ctrC];
            dctab = this.dcTab[ctrC];
            for (i = 0; i < this.nBlock[ctrC]; i+=1) {
                for (k = 0; k < this.IDCT_Source.length; k+=1) {
                    this.IDCT_Source[k] = 0;
                }

                value = this.getHuffmanValue(dctab, temp, index);

                if (value >= 0xFF00) {
                    return value;
                }

                prev[ctrC] = this.IDCT_Source[0] = prev[ctrC] + this.getn(index, value, temp, index);
                this.IDCT_Source[0] *= qtab[0];

                for (j = 1; j < 64; j+=1) {
                    value = this.getHuffmanValue(actab, temp, index);

                    if (value >= 0xFF00) {
                        return value;
                    }

                    j += (value >> 4);

                    if ((value & 0x0F) === 0) {
                        if ((value >> 4) === 0) {
                            break;
                        }
                    } else {
                        this.IDCT_Source[jpeg.lossless.Decoder.IDCT_P[j]] = this.getn(index, value & 0x0F, temp, index) * qtab[j];
                    }
                }

                this.scaleIDCT(this.DU[ctrC][i]);
            }
        }

        return 0;
    } else {
        for (i = 0; i < this.nBlock[0]; i+=1) {
            value = this.getHuffmanValue(this.dcTab[0], temp, index);
            if (value >= 0xFF00) {
                return value;
            }

            prev[0] += this.getn(prev, value, temp, index);
        }

        return 0;
    }
};



//	Huffman table for fast search: (HuffTab) 8-bit Look up table 2-layer search architecture, 1st-layer represent 256 node (8 bits) if codeword-length > 8
//	bits, then the entry of 1st-layer = (# of 2nd-layer table) | MSB and it is stored in the 2nd-layer Size of tables in each layer are 256.
//	HuffTab[*][*][0-256] is always the only 1st-layer table.
//
//	An entry can be: (1) (# of 2nd-layer table) | MSB , for code length > 8 in 1st-layer (2) (Code length) << 8 | HuffVal
//
//	HuffmanValue(table   HuffTab[x][y] (ex) HuffmanValue(HuffTab[1][0],...)
//	                ):
//	    return: Huffman Value of table
//	            0xFF?? if it receives a MARKER
//	    Parameter:  table   HuffTab[x][y] (ex) HuffmanValue(HuffTab[1][0],...)
//	                temp    temp storage for remainded bits
//	                index   index to bit of temp
//	                in      FILE pointer
//	    Effect:
//	        temp  store new remainded bits
//	        index change to new index
//	        in    change to new position
//	    NOTE:
//	      Initial by   temp=0; index=0;
//	    NOTE: (explain temp and index)
//	      temp: is always in the form at calling time or returning time
//	       |  byte 4  |  byte 3  |  byte 2  |  byte 1  |
//	       |     0    |     0    | 00000000 | 00000??? |  if not a MARKER
//	                                               ^index=3 (from 0 to 15)
//	                                               321
//	    NOTE (marker and marker_index):
//	      If get a MARKER from 'in', marker=the low-byte of the MARKER
//	        and marker_index=9
//	      If marker_index=9 then index is always > 8, or HuffmanValue()
//	        will not be called
jpeg.lossless.Decoder.prototype.getHuffmanValue = function (table, temp, index) {
    /*jslint bitwise: true */

    var code, input, mask;
    mask = 0xFFFF;

    if (index[0] < 8) {
        temp[0] <<= 8;
        input = this.stream.get8();
        if (input === 0xFF) {
            this.marker = this.stream.get8();
            if (this.marker !== 0) {
                this.markerIndex = 9;
            }
        }
        temp[0] |= input;
    } else {
        index[0] -= 8;
    }

    code = table[temp[0] >> index[0]];

    if ((code & jpeg.lossless.Decoder.MSB) !== 0) {
        if (this.markerIndex !== 0) {
            this.markerIndex = 0;
            return 0xFF00 | this.marker;
        }

        temp[0] &= (mask >> (16 - index[0]));
        temp[0] <<= 8;
        input = this.stream.get8();

        if (input === 0xFF) {
            this.marker = this.stream.get8();
            if (this.marker !== 0) {
                this.markerIndex = 9;
            }
        }

        temp[0] |= input;
        code = table[((code & 0xFF) * 256) + (temp[0] >> index[0])];
        index[0] += 8;
    }

    index[0] += 8 - (code >> 8);

    if (index[0] < 0) {
        throw new Error("index=" + index[0] + " temp=" + temp[0] + " code=" + code + " in HuffmanValue()");
    }

    if (index[0] < this.markerIndex) {
        this.markerIndex = 0;
        return 0xFF00 | this.marker;
    }

    temp[0] &= (mask >> (16 - index[0]));
    return code & 0xFF;
};



jpeg.lossless.Decoder.prototype.getn = function (PRED, n, temp, index) {
    /*jslint bitwise: true */

    var result, one, n_one, mask, input;
    one = 1;
    n_one = -1;
    mask = 0xFFFF;

    if (n === 0) {
        return 0;
    }

    if (n === 16) {
        if (PRED[0] >= 0) {
            return -32768;
        } else {
            return 32768;
        }
    }

    index[0] -= n;

    if (index[0] >= 0) {
        if ((index[0] < this.markerIndex) && !this.isLastPixel()) { // this was corrupting the last pixel in some cases
            this.markerIndex = 0;
            return (0xFF00 | this.marker) << 8;
        }

        result = temp[0] >> index[0];
        temp[0] &= (mask >> (16 - index[0]));
    } else {
        temp[0] <<= 8;
        input = this.stream.get8();

        if (input === 0xFF) {
            this.marker = this.stream.get8();
            if (this.marker !== 0) {
                this.markerIndex = 9;
            }
        }

        temp[0] |= input;
        index[0] += 8;

        if (index[0] < 0) {
            if (this.markerIndex !== 0) {
                this.markerIndex = 0;
                return (0xFF00 | this.marker) << 8;
            }

            temp[0] <<= 8;
            input = this.stream.get8();

            if (input === 0xFF) {
                this.marker = this.stream.get8();
                if (this.marker !== 0) {
                    this.markerIndex = 9;
                }
            }

            temp[0] |= input;
            index[0] += 8;
        }

        if (index[0] < 0) {
            throw new Error("index=" + index[0] + " in getn()");
        }

        if (index[0] < this.markerIndex) {
            this.markerIndex = 0;
            return (0xFF00 | this.marker) << 8;
        }

        result = temp[0] >> index[0];
        temp[0] &= (mask >> (16 - index[0]));
    }

    if (result < (one << (n - 1))) {
        result += (n_one << n) + 1;
    }

    return result;
};



jpeg.lossless.Decoder.prototype.getPreviousX = function () {
    /*jslint bitwise: true */

    if (this.xLoc > 0) {
        return this.getter((((this.yLoc * this.xDim) + this.xLoc) - 1));
    } else if (this.yLoc > 0) {
        return this.getPreviousY();
    } else {
        return (1 << (this.frame.precision - 1));
    }
};



jpeg.lossless.Decoder.prototype.getPreviousXY = function () {
    /*jslint bitwise: true */

    if ((this.xLoc > 0) && (this.yLoc > 0)) {
        return this.getter(((((this.yLoc - 1) * this.xDim) + this.xLoc) - 1));
    } else {
        return this.getPreviousY();
    }
};



jpeg.lossless.Decoder.prototype.getPreviousY = function () {
    /*jslint bitwise: true */

    if (this.yLoc > 0) {
        return this.getter((((this.yLoc - 1) * this.xDim) + this.xLoc));
    } else {
        return this.getPreviousX();
    }
};



jpeg.lossless.Decoder.prototype.isLastPixel = function () {
    return (this.xLoc === (this.xDim - 1)) && (this.yLoc === (this.yDim - 1));
};



jpeg.lossless.Decoder.prototype.output = function (PRED) {
    if ((this.xLoc < this.xDim) && (this.yLoc < this.yDim)) {
        this.setter((((this.yLoc * this.xDim) + this.xLoc)), PRED[0]);

        this.xLoc+=1;

        if (this.xLoc >= this.xDim) {
            this.yLoc+=1;
            this.xLoc = 0;
        }
    }
};


jpeg.lossless.Decoder.prototype.setValue16 = function (index, val) {
    this.outputData.setInt16(index * 2, val, true);
};


jpeg.lossless.Decoder.prototype.getValue16 = function (index) {
    return this.outputData.getInt16(index * 2, true);
};



jpeg.lossless.Decoder.prototype.setValue8 = function (index, val) {
    this.outputData.setInt16(index, val, true);
};



jpeg.lossless.Decoder.prototype.getValue8 = function (index) {
    return this.outputData.getInt16(index, true);
};


jpeg.lossless.Decoder.prototype.readApp = function() {
    var count = 0, length = this.stream.get16();
    count += 2;

    while (count < length) {
        this.stream.get8();
        count+=1;
    }

    return length;
};



jpeg.lossless.Decoder.prototype.readComment = function () {
    var sb = "", count = 0, length;

    length = this.stream.get16();
    count += 2;

    while (count < length) {
        sb += this.stream.get8();
        count+=1;
    }

    return sb;
};



jpeg.lossless.Decoder.prototype.readNumber = function() {
    var Ld = this.stream.get16();

    if (Ld !== 4) {
        throw new Error("ERROR: Define number format throw new IOException [Ld!=4]");
    }

    return this.stream.get16();
};



jpeg.lossless.Decoder.prototype.scaleIDCT = function (matrix) {
    /*jslint bitwise: true */

    var p = [[]], t0, t1, t2, t3, i, src0, src1, src2, src3, src4, src5, src6, src7, det0, det1, det2, det3, det4,
        det5, det6, det7, mindex = 0;

    for (i = 0; i < 8; i+=1) {
        src0 = this.IDCT_Source[(0) + i];
        src1 = this.IDCT_Source[(8) + i];
        src2 = this.IDCT_Source[(16) + i] - this.IDCT_Source[(24) + i];
        src3 = this.IDCT_Source[(24) + i] + this.IDCT_Source[(16) + i];
        src4 = this.IDCT_Source[(32) + i] - this.IDCT_Source[(56) + i];
        src6 = this.IDCT_Source[(40) + i] - this.IDCT_Source[(48) + i];
        t0 = this.IDCT_Source[(40) + i] + this.IDCT_Source[(48) + i];
        t1 = this.IDCT_Source[(32) + i] + this.IDCT_Source[(56) + i];
        src5 = t0 - t1;
        src7 = t0 + t1;

        det4 = (-src4 * 480) - (src6 * 192);
        det5 = src5 * 384;
        det6 = (src6 * 480) - (src4 * 192);
        det7 = src7 * 256;
        t0 = src0 * 256;
        t1 = src1 * 256;
        t2 = src2 * 384;
        t3 = src3 * 256;
        det3 = t3;
        det0 = t0 + t1;
        det1 = t0 - t1;
        det2 = t2 - t3;

        src0 = det0 + det3;
        src1 = det1 + det2;
        src2 = det1 - det2;
        src3 = det0 - det3;
        src4 = det6 - det4 - det5 - det7;
        src5 = (det5 - det6) + det7;
        src6 = det6 - det7;
        src7 = det7;

        p[0][i] = (src0 + src7 + (1 << 12)) >> 13;
        p[1][i] = (src1 + src6 + (1 << 12)) >> 13;
        p[2][i] = (src2 + src5 + (1 << 12)) >> 13;
        p[3][i] = (src3 + src4 + (1 << 12)) >> 13;
        p[4][i] = ((src3 - src4) + (1 << 12)) >> 13;
        p[5][i] = ((src2 - src5) + (1 << 12)) >> 13;
        p[6][i] = ((src1 - src6) + (1 << 12)) >> 13;
        p[7][i] = ((src0 - src7) + (1 << 12)) >> 13;
    }

    for (i = 0; i < 8; i+=1) {
        src0 = p[i][0];
        src1 = p[i][1];
        src2 = p[i][2] - p[i][3];
        src3 = p[i][3] + p[i][2];
        src4 = p[i][4] - p[i][7];
        src6 = p[i][5] - p[i][6];
        t0 = p[i][5] + p[i][6];
        t1 = p[i][4] + p[i][7];
        src5 = t0 - t1;
        src7 = t0 + t1;

        det4 = (-src4 * 480) - (src6 * 192);
        det5 = src5 * 384;
        det6 = (src6 * 480) - (src4 * 192);
        det7 = src7 * 256;
        t0 = src0 * 256;
        t1 = src1 * 256;
        t2 = src2 * 384;
        t3 = src3 * 256;
        det3 = t3;
        det0 = t0 + t1;
        det1 = t0 - t1;
        det2 = t2 - t3;

        src0 = det0 + det3;
        src1 = det1 + det2;
        src2 = det1 - det2;
        src3 = det0 - det3;
        src4 = det6 - det4 - det5 - det7;
        src5 = (det5 - det6) + det7;
        src6 = det6 - det7;
        src7 = det7;

        matrix[mindex+=1] = (src0 + src7 + (1 << 12)) >> 13;
        matrix[mindex+=1] = (src1 + src6 + (1 << 12)) >> 13;
        matrix[mindex+=1] = (src2 + src5 + (1 << 12)) >> 13;
        matrix[mindex+=1] = (src3 + src4 + (1 << 12)) >> 13;
        matrix[mindex+=1] = ((src3 - src4) + (1 << 12)) >> 13;
        matrix[mindex+=1] = ((src2 - src5) + (1 << 12)) >> 13;
        matrix[mindex+=1] = ((src1 - src6) + (1 << 12)) >> 13;
        matrix[mindex+=1] = ((src0 - src7) + (1 << 12)) >> 13;
    }
};



/*
 * Copyright (C) 2015 Michael Martinez
 * Changes: Added support for selection values 2-7, fixed minor bugs &
 * warnings, split into multiple class files, and general clean up.
 */

/*
 * Copyright (C) 2003-2009 JNode.org
 * Original source: http://webuser.fh-furtwangen.de/~dersch/
 * Changed License to LGPL with the friendly permission of Helmut Dersch.
 */

/*
 * Copyright (C) Helmut Dersch
 *
 * This library is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library; If not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

/*jslint browser: true, node: true */
/*global require, module */

"use strict";

jpeg.lossless.FrameHeader = jpeg.lossless.FrameHeader || function () {
    this.components = []; // Components
    this.dimX = 0; // Number of samples per line
    this.dimY = 0; // Number of lines
    this.numComp = 0; // Number of component in the frame
    this.precision = 0; // Sample Precision (from the original image)
};



/*** Prototype Methods ***/

jpeg.lossless.FrameHeader.prototype.read = function (data) {
    /*jslint bitwise: true */

    var count = 0, length, i, c, temp;

    length = data.get16();
    count += 2;

    this.precision = data.get8();
    count+=1;

    this.dimY = data.get16();
    count += 2;

    this.dimX = data.get16();
    count += 2;

    this.numComp = data.get8();
    count+=1;
    for (i = 1; i <= this.numComp; i+=1) {
        if (count > length) {
            throw new Error("ERROR: frame format error");
        }

        c = data.get8();
        count+=1;

        if (count >= length) {
            throw new Error("ERROR: frame format error [c>=Lf]");
        }

        temp = data.get8();
        count+=1;

        if (!this.components[c]) {
            this.components[c] = new jpeg.lossless.ComponentSpec();
        }

        this.components[c].hSamp = temp >> 4;
        this.components[c].vSamp = temp & 0x0F;
        this.components[c].quantTableSel = data.get8();
        count+=1;
    }

    if (count !== length) {
        throw new Error("ERROR: frame format error [Lf!=count]");
    }

    return 1;
};


/*
 * Copyright (C) 2015 Michael Martinez
 * Changes: Added support for selection values 2-7, fixed minor bugs &
 * warnings, split into multiple class files, and general clean up.
 */

/*
 * Copyright (C) 2003-2009 JNode.org
 * Original source: http://webuser.fh-furtwangen.de/~dersch/
 * Changed License to LGPL with the friendly permission of Helmut Dersch.
 */

/*
 * Copyright (C) Helmut Dersch
 *
 * This library is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library; If not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

/*jslint browser: true, node: true */
/*global require, module */

"use strict";

jpeg.lossless.HuffmanTable = jpeg.lossless.HuffmanTable || function () {
    this.l = jpeg.lossless.Utils.createArray(4, 2, 16);
    this.th = [];
    this.v = jpeg.lossless.Utils.createArray(4, 2, 16, 200);
    this.tc = jpeg.lossless.Utils.createArray(4, 2);

    this.tc[0][0] = 0;
    this.tc[1][0] = 0;
    this.tc[2][0] = 0;
    this.tc[3][0] = 0;
    this.tc[0][1] = 0;
    this.tc[1][1] = 0;
    this.tc[2][1] = 0;
    this.tc[3][1] = 0;
    this.th[0] = 0;
    this.th[1] = 0;
    this.th[2] = 0;
    this.th[3] = 0;
};



/*** Static Pseudo-constants ***/

jpeg.lossless.HuffmanTable.MSB = 0x80000000;


/*** Prototype Methods ***/

jpeg.lossless.HuffmanTable.prototype.read = function(data, HuffTab) {
    /*jslint bitwise: true */

    var count = 0, length, temp, t, c, i, j;

    length = data.get16();
    count += 2;

    while (count < length) {
        temp = data.get8();
        count+=1;
        t = temp & 0x0F;
        if (t > 3) {
            throw new Error("ERROR: Huffman table ID > 3");
        }

        c = temp >> 4;
        if (c > 2) {
            throw new Error("ERROR: Huffman table [Table class > 2 ]");
        }

        this.th[t] = 1;
        this.tc[t][c] = 1;

        for (i = 0; i < 16; i+=1) {
            this.l[t][c][i] = data.get8();
            count+=1;
        }

        for (i = 0; i < 16; i+=1) {
            for (j = 0; j < this.l[t][c][i]; j+=1) {
                if (count > length) {
                    throw new Error("ERROR: Huffman table format error [count>Lh]");
                }

                this.v[t][c][i][j] = data.get8();
                count+=1;
            }
        }
    }

    if (count !== length) {
        throw new Error("ERROR: Huffman table format error [count!=Lf]");
    }

    for (i = 0; i < 4; i+=1) {
        for (j = 0; j < 2; j+=1) {
            if (this.tc[i][j] !== 0) {
                this.buildHuffTable(HuffTab[i][j], this.l[i][j], this.v[i][j]);
            }
        }
    }

    return 1;
};



//	Build_HuffTab()
//	Parameter:  t       table ID
//	            c       table class ( 0 for DC, 1 for AC )
//	            L[i]    # of codewords which length is i
//	            V[i][j] Huffman Value (length=i)
//	Effect:
//	    build up HuffTab[t][c] using L and V.
jpeg.lossless.HuffmanTable.prototype.buildHuffTable = function(tab, L, V) {
    /*jslint bitwise: true */

    var currentTable, temp, k, i, j, n;
    temp = 256;
    k = 0;

    for (i = 0; i < 8; i+=1) { // i+1 is Code length
        for (j = 0; j < L[i]; j+=1) {
            for (n = 0; n < (temp >> (i + 1)); n+=1) {
                tab[k] = V[i][j] | ((i + 1) << 8);
                k+=1;
            }
        }
    }

    for (i = 1; k < 256; i+=1, k+=1) {
        tab[k] = i | jpeg.lossless.HuffmanTable.MSB;
    }

    currentTable = 1;
    k = 0;

    for (i = 8; i < 16; i+=1) { // i+1 is Code length
        for (j = 0; j < L[i]; j+=1) {
            for (n = 0; n < (temp >> (i - 7)); n+=1) {
                tab[(currentTable * 256) + k] = V[i][j] | ((i + 1) << 8);
                k+=1;
            }

            if (k >= 256) {
                if (k > 256) {
                    this.error = "ERROR: Huffman table error(1)!";
                }

                k = 0;
                currentTable+=1;
            }
        }
    }
};


/*
 * Copyright (C) 2015 Michael Martinez
 * Changes: Added support for selection values 2-7, fixed minor bugs &
 * warnings, split into multiple class files, and general clean up.
 */

/*
 * Copyright (C) 2003-2009 JNode.org
 * Original source: http://webuser.fh-furtwangen.de/~dersch/
 * Changed License to LGPL with the friendly permission of Helmut Dersch.
 */

/*
 * Copyright (C) Helmut Dersch
 *
 * This library is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library; If not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

/*jslint browser: true, node: true */
/*global require, module */

"use strict";

jpeg.lossless.QuantizationTable = jpeg.lossless.QuantizationTable || function () {
    this.precision = []; // Quantization precision 8 or 16
    this.tq = []; // 1: this table is presented
    this.quantTables = jpeg.lossless.Utils.createArray(4, 64); // Tables

    this.tq[0] = 0;
    this.tq[1] = 0;
    this.tq[2] = 0;
    this.tq[3] = 0;
};



/*** Static Methods ***/

jpeg.lossless.QuantizationTable.enhanceQuantizationTable = function(qtab, table) {
    /*jslint bitwise: true */

    var i;

    for (i = 0; i < 8; i+=1) {
        qtab[table[(0 * 8) + i]] *= 90;
        qtab[table[(4 * 8) + i]] *= 90;
        qtab[table[(2 * 8) + i]] *= 118;
        qtab[table[(6 * 8) + i]] *= 49;
        qtab[table[(5 * 8) + i]] *= 71;
        qtab[table[(1 * 8) + i]] *= 126;
        qtab[table[(7 * 8) + i]] *= 25;
        qtab[table[(3 * 8) + i]] *= 106;
    }

    for (i = 0; i < 8; i+=1) {
        qtab[table[0 + (8 * i)]] *= 90;
        qtab[table[4 + (8 * i)]] *= 90;
        qtab[table[2 + (8 * i)]] *= 118;
        qtab[table[6 + (8 * i)]] *= 49;
        qtab[table[5 + (8 * i)]] *= 71;
        qtab[table[1 + (8 * i)]] *= 126;
        qtab[table[7 + (8 * i)]] *= 25;
        qtab[table[3 + (8 * i)]] *= 106;
    }

    for (i = 0; i < 64; i+=1) {
        qtab[i] >>= 6;
    }
};


/*** Prototype Methods ***/

jpeg.lossless.QuantizationTable.prototype.read = function (data, table) {
    /*jslint bitwise: true */

    var count = 0, length, temp, t, i;

    length = data.get16();
    count += 2;

    while (count < length) {
        temp = data.get8();
        count+=1;
        t = temp & 0x0F;

        if (t > 3) {
            throw new Error("ERROR: Quantization table ID > 3");
        }

        this.precision[t] = temp >> 4;

        if (this.precision[t] === 0) {
            this.precision[t] = 8;
        } else if (this.precision[t] === 1) {
            this.precision[t] = 16;
        } else {
            throw new Error("ERROR: Quantization table precision error");
        }

        this.tq[t] = 1;

        if (this.precision[t] === 8) {
            for (i = 0; i < 64; i+=1) {
                if (count > length) {
                    throw new Error("ERROR: Quantization table format error");
                }

                this.quantTables[t][i] = data.get8();
                count+=1;
            }

            jpeg.lossless.QuantizationTable.enhanceQuantizationTable(this.quantTables[t], table);
        } else {
            for (i = 0; i < 64; i+=1) {
                if (count > length) {
                    throw new Error("ERROR: Quantization table format error");
                }

                this.quantTables[t][i] = data.get16();
                count += 2;
            }

            jpeg.lossless.QuantizationTable.enhanceQuantizationTable(this.quantTables[t], table);
        }
    }

    if (count !== length) {
        throw new Error("ERROR: Quantization table error [count!=Lq]");
    }

    return 1;
};



/*
 * Copyright (C) 2015 Michael Martinez
 * Changes: Added support for selection values 2-7, fixed minor bugs &
 * warnings, split into multiple class files, and general clean up.
 */

/*
 * Copyright (C) 2003-2009 JNode.org
 * Original source: http://webuser.fh-furtwangen.de/~dersch/
 * Changed License to LGPL with the friendly permission of Helmut Dersch.
 */

/*
 * Copyright (C) Helmut Dersch
 *
 * This library is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library; If not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

/*jslint browser: true, node: true */
/*global require, module */

"use strict";

jpeg.lossless.ScanComponent = jpeg.lossless.ScanComponent || function () {
    this.acTabSel = 0; // AC table selector
    this.dcTabSel = 0; // DC table selector
    this.scanCompSel = 0; // Scan component selector
};



/*
 * Copyright (C) 2015 Michael Martinez
 * Changes: Added support for selection values 2-7, fixed minor bugs &
 * warnings, split into multiple class files, and general clean up.
 */

/*
 * Copyright (C) 2003-2009 JNode.org
 * Original source: http://webuser.fh-furtwangen.de/~dersch/
 * Changed License to LGPL with the friendly permission of Helmut Dersch.
 */

/*
 * Copyright (C) Helmut Dersch
 *
 * This library is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library; If not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

/*jslint browser: true, node: true */
/*global require, module */

"use strict";

jpeg.lossless.ScanHeader = jpeg.lossless.ScanHeader || function () {
    this.ah = 0;
    this.al = 0;
    this.numComp = 0; // Number of components in the scan
    this.selection = 0; // Start of spectral or predictor selection
    this.spectralEnd = 0; // End of spectral selection
    this.components = [];
};


/*** Prototype Methods ***/

jpeg.lossless.ScanHeader.prototype.read = function(data) {
    /*jslint bitwise: true */

    var count = 0, length, i, temp;

    length = data.get16();
    count += 2;

    this.numComp = data.get8();
    count+=1;

    for (i = 0; i < this.numComp; i+=1) {
        this.components[i] = new jpeg.lossless.ScanComponent();

        if (count > length) {
            throw new Error("ERROR: scan header format error");
        }

        this.components[i].scanCompSel = data.get8();
        count+=1;

        temp = data.get8();
        count+=1;

        this.components[i].dcTabSel = (temp >> 4);
        this.components[i].acTabSel = (temp & 0x0F);
    }

    this.selection = data.get8();
    count+=1;

    this.spectralEnd = data.get8();
    count+=1;

    temp = data.get8();
    this.ah = (temp >> 4);
    this.al = (temp & 0x0F);
    count+=1;

    if (count !== length) {
        throw new Error("ERROR: scan header format error [count!=Ns]");
    }

    return 1;
};



/*
 * Copyright (C) 2015 Michael Martinez
 * Changes: Added support for selection values 2-7, fixed minor bugs &
 * warnings, split into multiple class files, and general clean up.
 */

/*
 * Copyright (C) 2003-2009 JNode.org
 * Original source: http://webuser.fh-furtwangen.de/~dersch/
 * Changed License to LGPL with the friendly permission of Helmut Dersch.
 */

/*
 * Copyright (C) Helmut Dersch
 *
 * This library is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library; If not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

/*jslint browser: true, node: true */
/*global require, module */

"use strict";

jpeg.lossless.Utils = jpeg.lossless.Utils || {};


/*** Static methods ***/

// http://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
jpeg.lossless.Utils.createArray = function (length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = jpeg.lossless.Utils.createArray.apply(this, args);
    }

    return arr;
};


var moduleType = typeof module;
if ((moduleType !== 'undefined') && module.exports) {
   module.exports = jpeg;
}
