/*  Snapin8r
	Snapin8r.js
*/

! function () {
    // Block libraries
    // Copied from the decompiled Scratch player Flash source
    var blib = {};
    ! function (s8) {
        s8.BLOCK_LIBRARY = {
            "forward:": "forward",
            "turnRight:": "turn",
            "turnLeft:": "turnLeft",
            "heading:": "setHeading",
            "pointTowards:": "doFaceTowards",
            "gotoX:y:": "gotoXY",
            "gotoSpriteOrMouse:": "doGotoObject",
            "glideSecs:toX:y:elapsed:from:": "doGlide",
            "changeXposBy:": "changeXPosition",
            "xpos:": "setXPosition",
            "changeYposBy:": "changeYPosition",
            "ypos:": "setYPosition",
            "bounceOffEdge": "bounceOffEdge",
            //	"setRotationStyle":"",
            "xpos": "xPosition",
            "ypos": "yPosition",
            "heading": "direction",
            "say:duration:elapsed:from:": "doSayFor",
            "say:": "bubble",
            "think:duration:elapsed:from:": "doThinkFor",
            "think:": "doThink",
            "show": "show",
            "hide": "hide",
            "lookLike:": "doSwitchToCostume",
            "nextCostume": "doWearNextCostume",
            "startScene": "doSwitchToCostume",
            "changeGraphicEffect:by:": "changeEffect",
            "setGraphicEffect:to:": "setEffect",
            "filterReset": "clearEffects",
            "changeSizeBy:": "changeScale",
            "setSizeTo:": "setScale",
            "comeToFront": "comeToFront",
            "goBackByLayers:": "goBack",
            "costumeIndex": "getCostumeIdx",
            //	"sceneName":"",
            "scale": "getScale",
            //	"startScene":"",
            //	"startSceneAndWait":"",
            //	"nextScene":"",
            //	"changeGraphicEffect:by:":"changeEffect",
            //	"setGraphicEffect:to:":"setEffect",
            //	"filterReset":"clearEffects",
            //	"setVideoState":"",
            //	"setVideoTransparency":"",
            //	"sceneName":"",
            "backgroundIndex": "getCostumeIdx",
            "playSound:": "playSound",
            "doPlaySoundAndWait": "doPlaySoundUntilDone",
            "stopAllSounds": "doStopAllSounds",
            //	"playDrum":"",
            "rest:elapsed:from:": "doRest",
            "noteOn:duration:elapsed:from:": "doPlayNote",
            //	"instrument:":"",
            //	"changeVolumeBy:":"",
            //	"setVolumeTo:":"",
            //	"volume":"",
            "changeTempoBy:": "doChangeTempo",
            "setTempoTo:": "doSetTempo",
            "tempo": "getTempo",
            "clearPenTrails": "clear",
            "stampCostume": "doStamp",
            "putPenDown": "down",
            "putPenUp": "up",
            "penColor:": "setColor",
            "changePenHueBy:": "changeHue",
            "setPenHueTo:": "setHue",
            "changePenShadeBy:": "changeBrightness",
            "setPenShadeTo:": "setBrightness",
            "changePenSizeBy:": "changeSize",
            "penSize:": "setSize",
            //	"clearPenTrails":"",
            "whenGreenFlag": "receiveGo",
            "whenKeyPressed": "receiveKey",
            "whenClicked": "receiveClick",
            "whenSceneStarts": "receiveMessage",
            //	"whenSensorGreaterThan":"",
            "whenIReceive": "receiveMessage",
            "broadcast:": "doBroadcast",
            "doBroadcastAndWait": "doBroadcastAndWait",
            "wait:elapsed:from:": "doWait",
            "doRepeat": "doRepeat",
            "doForever": "doForever",
            "doIf": "doIf",
            "doIfElse": "doIfElse",
            "doWaitUntil": "doWaitUntil",
            "doUntil": "doUntil",
            "stopScripts": "doStop",
            "whenCloned": "receiveOnClone",
            "createCloneOf": "createClone",
            "deleteClone": "removeClone",
            //	"wait:elapsed:from:":"",
            //	"doRepeat":"",
            //	"doForever":"",
            //	"doIf":"",
            //	"doIfElse":"",
            //	"doWaitUntil":"",
            //	"doUntil":"",
            //	"stopScripts":"",
            //	"createCloneOf":"",
            "touching:": "reportTouchingObject",
            "touchingColor:": "reportTouchingColor",
            "color:sees:": "reportColorIsTouchingColor",
            "distanceTo:": "reportDistanceTo",
            "doAsk": "doAsk",
            "answer": "reportLastAnswer",
            "keyPressed:": "reportKeyPressed",
            "mousePressed": "reportMouseDown",
            "mouseX": "reportMouseX",
            "mouseY": "reportMouseY",
            //	"soundLevel":"",
            //	"senseVideoMotion":"",
            "timer": "reportTimer",
            "timerReset": "doResetTimer",
            "getAttribute:of:": "reportAttributeOf",
            //	"timeAndDate":"",
            //	"timestamp":"",
            //	"getUserId":"",
            //	"doAsk":"",
            //	"answer":"",
            //	"keyPressed:":"",
            //	"mousePressed":"",
            //	"mouseX":"",
            //	"mouseY":"",
            //	"soundLevel":"",
            //	"senseVideoMotion":"",
            //	"timer":"",
            //	"timerReset":"",
            //	"getAttribute:of:":"",
            //	"timeAndDate":"",
            //	"timestamp":"",
            //	"getUserId":"",
            "+": "reportSum",
            "-": "reportDifference",
            "*": "reportProduct",
            "/": "reportQuotient",
            "randomFrom:to:": "reportRandom",
            "<": "reportLessThan",
            "=": "reportEquals",
            ">": "reportGreaterThan",
            "&": "reportAnd",
            "|": "reportOr",
            "not": "reportNot",
            "concatenate:with:": "reportJoinWords",
            "letter:of:": "reportLetter",
            "stringLength:": "reportStringSize",
            "%": "reportModulus",
            "rounded": "reportRound",
            "computeFunction:of:": "reportMonadic",
            "readVar": "",
            "setVar:to:": "doSetVar",
            "changeVar:by:": "doChangeVar",
            "showVariable:": "doShowVar",
            "hideVariable:": "doHideVar",
            "append:toList:": "doAddToList",
            "deleteLine:ofList:": "doDeleteFromList",
            "insert:at:ofList:": "doInsertInList",
            "setLine:ofList:to:": "doReplaceInList",
            "getLine:ofList:": "reportListItem",
            "lineCountOfList:": "reportListLength",
            "list:contains:": "reportListContainsItem",
            "showList:": "doShowVar",
            "hideList:": "doHideVar",
            //	"whenSensorConnected":"",
            //	"sensorPressed:":"",
            //	"sensor:":"",
            //	"motorOnFor:elapsed:from:":"",
            //	"allMotorsOn":"",
            //	"allMotorsOff":"",
            //	"startMotorPower:":"",
            //	"setMotorDirection:":"",
            //	"whenDistanceLessThan":"",
            //	"whenTiltIs":"",
            //	"wedoDistance":"",
            //	"wedoTilt":"",
            //	"midiNoteOn":"",
            //	"midiNoteOff":"",
            //	"midiPitchBend":"",
            //	"midiController":"",
            //	"midiProgram":"",
            //	"midiReset":"",
            //	"midiUseJavaSynth":"",
            //	"midiTime":"",
            //	"drum:duration:elapsed:from:":"",
            //	"midiInstrument:":"",
            //	"isLoud":"",
            //	"abs":"",
            //	"sqrt":"",
            "doReturn": "doReport",
            "stopAll": "doStopAll",
            //	"showBackground:":"",
            //	"nextBackground":"",
            //	"doForeverIf":"",
            //	"COUNT":"",
            //	"COUNT":"",
            //	"CLR_COUNT":"",
            //	"INCR_COUNT":"",
            //	"doForLoop":"",
            //	"doWhile":"",
            "warpSpeed": "doWarp"
            //	"scrollRight":"",
            //	"scrollUp":"",
            //	"scrollAlign":"",
            //	"xScroll":"",
            //	"yScroll":"",
            //	"hideAll":"",
        };

        s8.C_INPUTS = {
            "doRepeat": [1],
            "doForever": [0],
            "doIf": [1],
            "doIfElse": [1, 2],
            "doUntil": [1]
        };

        s8.LIST_INPUTS = {
            "append:toList:": [1],
            "deleteLine:ofList:": [1],
            "insert:at:ofList:": [2],
            "setLine:ofList:to:": [1],
            "getLine:ofList:": [1],
            "lineCountOfList:": [0],
            "list:contains:": [0]
        };
        s8.COLOR_INPUTS = {
            "penColor:": [0],
            "touchingColor:": [0],
            "color:sees:": [0, 1]
        };
        s8.DD_INPUTS = {
            "reportMonadic": [0],
            "gotoSpriteOrMouse": [0]
        };
    }(blib);

    // XMLData is an abstraction of XML-style data

    function XMLData(tag_name, attribs, content) {
        this.tag_name = tag_name || "null";
        this.attribs = attribs || [];
        this.content = content || [];
    }
    XMLData.prototype.toString = function () {
        var result = "";
        result += "<";
        result += this.tag_name;
        this.attribs.forEach(function (attribute) {
            result += " ";
            result += attribute[0];
            result += "=";
            result += "\"";
            result += attribute[1];
            result += "\"";
        });
        result += ">";

        if (this.content instanceof Array) {
            this.content.forEach(function (attribute) {
                result += attribute.toString();
            });
        } else {
            result += this.content;
        }

        result += "</";
        result += this.tag_name;
        result += ">";
        return result;
    };

    XMLData.prototype.property = function (name, val) {
        // convenience method
        this.attribs.push([name, val]);
    };


    // Custom error class so that Snap! can catch conversion issues

    function ConversionError(m) {
        this.name = "ConversionError";
        this.message = m;
    }
    ConversionError.prototype = new Error();
    ConversionError.prototype.constructor = ConversionError;

    function extract_costume(zip, costume) {
        var f = zip.file(
            costume.baseLayerID + "." + costume.baseLayerMD5.split(".")[1]
        ).asUint8Array();
        var str = btoa(
            String.fromCharCode.apply(null, f)
        );
        var ext = costume.baseLayerMD5.split(".")[1];
        ext = ext === "svg" ? "svg+xml" : ext;
        return "data:image/" + ext + ";base64," + str;
    }

    function convert_costume(zip, costume) {
        var cos = extract_costume(zip, costume);
        var result = new XMLData("costume");
        result.property("name", costume["costumeName"]);
        result.property("center-x", costume["rotationCenterX"]);
        result.property("center-y", costume["rotationCenterY"]);
        result.property("image", cos);
        return result;
    }

    function convert_variables(scriptable) {
        var result = new XMLData("variables");
        if (scriptable["variables"]) {
            scriptable["variables"].forEach(
                function (v) {
                    result.content.push(
                        new XMLData(
                            "variable", [
                                ["name", v["name"]]
                            ],
                            new XMLData("l", null, v["value"])
                        )
                    );
                }
            );
        }
        if (scriptable["lists"]) {
            scriptable["lists"].forEach(
                function (l) {
                    console.log(l);
                    var lxml = new XMLData("list");
                    l["contents"].forEach(
                        function (item) {
                            var itemxml = new XMLData(
                                "item",
                                null,
                                new XMLData("l", null, item)
                            );
                            lxml.content.push(itemxml);
                        }
                    );
                    result.content.push(
                        new XMLData(
                            "variable", [
                                ["name", l["listName"]]
                            ],
                            lxml
                        )
                    );
                }
            );
        }
        return result;
    }

    function extract_sound(zip, sound) {
        var f = zip.file(
            sound.soundID + "." + sound.md5.split(".")[1]
        ).asUint8Array();
        var str = btoa(
            String.fromCharCode.apply(null, f)
        );
        return "data:audio/" + sound.md5.split(".")[1] + ";base64," + str;
    }

    function convert_script(script, objName, ignoreCoords) {
        var result = new XMLData("script");
        var blocks;
        if (!ignoreCoords) {
            result.property("x", script[0]);
            result.property("y", script[1]);
            blocks = script[2];
        } else {
            blocks = script;
        }
        if (blocks) {
            blocks.forEach(
                function (blk) {
                    result.content.push(convert_block(blk, objName));
                }
            );
        }
        return result;

    }

    function convert_block(blk, objName) {
        var proc = blk[0];

        if (proc === "readVariable" || proc === "getParam") {
            return new XMLData("block", [
                ["var", blk[1]]
            ]);
        }

        var mainblk, args, arglist;
        if (proc === "call") {
            mainblk = new XMLData(
                "custom-block", [
                    ["s", blk[1]],
                    ["scope", objName]
                ]
            );
            args = blk.slice(2);
        } else {
            mainblk = new XMLData("block");
            mainblk.property("s", blib.BLOCK_LIBRARY[proc]);
            args = blk.slice(1);
        }
        if (proc === "concatenate:with:") {
            arglist = new XMLData("list");
        }
        for (var i = 0; i < args.length; i++) {
            var arg = args[i];
            if (arg === "_mouse_") arg = new XMLData("option", null, "mouse-pointer");
            if (arg === "_edge_") arg = new XMLData("option", null, "edge");
            if (arg === "_myself_") arg = new XMLData("option", null, "myself");
            if (arg === "_stage_") arg = "Stage";
            if (arg === "e^") arg = "e ^";
            if (arg === false) {
                mainblk.content.append(new XMLData("l"));
                continue;
            }
            if (proc === "getAttribute:of:") {
                console.log("a");
                console.log(arg);
                if (arg === "backdrop name") arg = "costume name";
                if (arg === "backdrop #") arg = "costume #";
                if (["volume", "x position", "y position", "direction", "costume #", "costume name"].indexOf("arg") !== -1) {
                    arg = new XMLData(new XMLData("option", null, arg));
                }
                mainblk.content.push(new XMLData("l", null, arg));
            } else if (blib.C_INPUTS[proc] && blib.C_INPUTS[proc].indexOf(i) !== -1) {
                mainblk.content.push(convert_script(arg, objName, true));
            } else if (blib.LIST_INPUTS[proc] && blib.LIST_INPUTS[proc].indexOf(i) !== -1) {
                mainblk.content.push(new XMLData("block", [
                    ["var", arg]
                ]));
            } else if (blib.DD_INPUTS[proc] && blib.DD_INPUTS[proc].indexOf(i) !== -1) {
                mainblk.content.push(new XMLData("option", null, arg));
            } else if (proc === "stopScripts") {
                if (arg === "all") {
                    return new XMLData("block", [
                        ["s", "doStopAll"]
                    ]);
                }
                if (arg === "this script") {
                    return new XMLData("block", [
                        ["s", "doStop"]
                    ]);
                }
                throw new ConversionError("Snap! can't stop all scripts except the current one.");
            } else if (blib.COLOR_INPUTS[proc] && blib.COLOR_INPUTS[proc].indexOf(i) !== -1) {
                var h = Math.abs(parseInt(arg)).toString(16);
                while (h.length < 6) {
                    h = "0" + h;
                }
                var c1 = parseInt(h[0], 16) * 16 + parseInt(h[1], 16);
                var c2 = parseInt(h[2], 16) * 16 + parseInt(h[3], 16);
                var c3 = parseInt(h[4], 16) * 16 + parseInt(h[5], 16);
                mainblk.content.push(new XMLData("color", null, c1 + "," + c2 + "," + c3));
            } else {
                if (proc === "concatenate:with:") {
                    if (arg instanceof Array) {
                        arglist.content.push(convert_block(arg, objName));
                    } else {
                        arglist.content.push(new XMLData("l", null, arg));
                    }
                } else {
                    if (arg instanceof Array) {
                        mainblk.content.push(convert_block(arg, objName));
                    } else {
                        mainblk.content.push(new XMLData("l", null, arg));
                    }
                }
            }
        }
        if (proc === "concatenate:with:") {
            mainblk.content.push(arglist);
        }
        return mainblk;
    }

    function convert_scriptable(data, zip, stage) {
        var result = new XMLData(stage ? "stage" : "sprite");

        result.property("name", data["objName"]);
        result.property("costume", data["currentCostumeIndex"] + 1);
        if (data["tempoBPM"]) {
            result.property("tempo", data["tempoBPM"]);
        }

        if (stage) {
            result.property("pentrails", "");
            result.property("threadsafe", "false");
        } else {
            result.property("x", data["scratchX"]);
            result.property("y", data["scratchY"]);
            result.property("heading", data["direction"]);
            result.property("scale", data["scale"]);
        }

        var blocksXML = new XMLData("blocks");
        var scriptsXML = new XMLData("scripts");
        if (data["scripts"]) {
            data["scripts"].forEach(
                function (script) {
                    if (script[2][0][0] === "procDef") {
                        // Custom block
                        // [Xpos, Ypos, [procdef, name, inputs, defaults, turbo]]
                        // TODO
                        var label = script[2][0][1];
                        var inputs = script[2][0][2];
                        var defaults = script[2][0][3];
                        var turbo = script[2][0][4];
                        var label_new = "";
                        var inputs_new = [];
                        var split = label.split("%");
                        for (var i = 0; i < split.length; i++) {
                            if (i === 0) {
                                label_new = split[i];
                            } else {
                                var ld = {
                                    "n": "%n",
                                    "b": "%b",
                                    "s": "%s"
                                };
                                label_new += "%'" + inputs[i - 1] + "'";
                                label_new += split[i].slice(1);
                                inputs_new.push(
                                    new XMLData(
                                        "input", [
                                            ["type", ld[split[i][0]]]
                                        ],
                                        defaults[i - 1]
                                    )
                                );
                            }
                        }
                        var scr = convert_script(script[2].slice(1), data["objName"], true);
                        if (turbo) {
                            var rbscr = new XMLData(
                                "script",
                                null,
                                new XMLData(
                                    "block", [
                                        ["s", "doWarp"]
                                    ],
                                    scr
                                )
                            );
                        } else {
                            var rbscr = scr;
                        }
                        var def = new XMLData(
                            "block-definition", [
                                ["s", label_new],
                                ["category", "other"],
                                ["type", "command"]
                            ], [new XMLData("inputs", null, inputs_new), rbscr]
                        );
                        blocksXML.content.push(def);
                    } else {
                        scriptsXML.content.push(convert_script(script, data["objName"]));
                    }
                }
            );
        }
        result.content.push(blocksXML);
        result.content.push(scriptsXML);

        if (data["children"]) {
            var children = new XMLData("sprites");
            data["children"].forEach(
                function (child) {
                    if (child["objName"]) {
                        // Sprite
                        children.content.push(convert_scriptable(child, zip));
                    } else {
                        // Watcher
                        var wat = new XMLData("watcher");
                        wat.property("var", child["param"]);
                        wat.property(
                            "style", ["normal", "large", "slider"][child["mode"] - 1]
                        );
                        wat.property("color", "243,118,29");
                        wat.property("x", child["x"]);
                        wat.property("y", child["y"]);
                        children.content.push(wat);
                    }
                }
            );
            result.content.push(children);
        }

        if (data["costumes"]) {
            var costumes = new XMLData("costumes");
            var costumeslist = new XMLData("list");
            data["costumes"].forEach(function (cos) {
                costumeslist.content.push(
                    new XMLData("item", null, convert_costume(zip, cos))
                );
            });
            costumes.content = costumeslist;
            result.content.push(costumes);
        }

        if (data["sounds"]) {
            var sounds = new XMLData("sounds");
            var soundslist = new XMLData("list");
            data["sounds"].forEach(function (snd) {
                var soundxml = new XMLData("sound");
                soundxml.property("name", snd["soundName"]);
                soundxml.property("sound", extract_sound(zip, snd));
                soundslist.content.push(
                    new XMLData("item", null, soundxml)
                );
            });
            sounds.content = soundslist;
            result.content.push(sounds);
        }

        var varks = new XMLData("variables");
        if (!stage && (data["variables"] || data["lists"])) {
            varks = convert_variables(data);
        }
        result.content.push(varks);

        return result;
    }

    // Actual exported function
    window.Snapin8r = function (zip) {
        // Convert a zip object output by JSZip into an XML string for Snap!.
        if (!zip.file("project.json")) {
            throw new ConversionError("project.json does not exist.");
        }
        var json_data = zip.file("project.json").asText();
        try {
            json_data = JSON.parse(json_data);
        } catch (SyntaxError) {
            throw new ConversionError(
                "Corrupted project.json (JSON parse error)"
            );
        }
        var result = new XMLData("project");
        result.property("name", "Untitled");
        result.property("app", "Snapin8r");
        result.property("version", "1");
        result.content.push(new XMLData("notes", null, "Converted by Snapin8r."));
        result.content.push(new XMLData("thumbnail", null, ""));

        // global variables (special case)
        var varks = new XMLData("variables");
        if (json_data["variables"] || json_data["lists"]) {
            varks = convert_variables(json_data);
        }
        result.content.push(varks);

        result.content.push(convert_scriptable(json_data, zip, true));
        console.log(result.toString());
        document.getElementById("sandbox").src = ("http://snap.berkeley.edu/snapsource/snap.html#open:" + encodeURIComponent(result));
    };

    // Exports:
    window.Snapin8r.blib = blib;
    window.Snapin8r.XMLData = XMLData;
    window.Snapin8r.ConversionError = ConversionError;
}();
