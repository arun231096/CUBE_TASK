"use strict";
var Prelude = require("../Prelude");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Data_List = require("../Data.List");
var Data_Maybe = require("../Data.Maybe");
var $$Math = require("../Math");
var Mathbox_Classes = require("../Mathbox.Classes");
var Mathbox_Field = require("../Mathbox.Field");
var Mathbox_Mathbox = require("../Mathbox.Mathbox");
var Mathbox_Types = require("../Mathbox.Types");
var Data_Function = require("../Data.Function");
var Data_List_Types = require("../Data.List.Types");
var Mathbox_Class_View_Cartesian = require("../Mathbox.Class.View.Cartesian");
var Data_Ring = require("../Data.Ring");
var Mathbox_Class_Draw_Axis = require("../Mathbox.Class.Draw.Axis");
var Mathbox_Class_Camera_Camera = require("../Mathbox.Class.Camera.Camera");
var Mathbox_Class_Transform_Transform3 = require("../Mathbox.Class.Transform.Transform3");
var Mathbox_Class_Draw_Grid = require("../Mathbox.Class.Draw.Grid");
var Mathbox_Class_Transform_Transform4 = require("../Mathbox.Class.Transform.Transform4");
var Control_Bind = require("../Control.Bind");
var Data_Functor = require("../Data.Functor");

/**
 *  axis width to measure the axis range
 */
var gridWidth = new Mathbox_Field.Val(2.0);

/**
 *  Cube Rotation problem developed by purescript
 *  Designed by Arunkumar Angappan IV-BE-CSE, SASURIE COLLEGE OF ENGINEERING
 */
var camPos = Mathbox_Field.Val.create(Mathbox_Types.mkVec3(2)(1)(6));

/**
 *  vector postion in the plane
 */
var axisWidth = new Mathbox_Field.Val(0.0);

/**
 *  grid width
 */
var mathbox = new Data_List_Types.Cons(Mathbox_Mathbox.Cartesian.create((function () {
    var $0 = {};
    for (var $1 in Mathbox_Class_View_Cartesian.mkCartesian) {
        if ({}.hasOwnProperty.call(Mathbox_Class_View_Cartesian.mkCartesian, $1)) {
            $0[$1] = Mathbox_Class_View_Cartesian.mkCartesian[$1];
        };
    };
    $0.range = new Mathbox_Field.Val([ Mathbox_Types.mkVec2(-2)(2), Mathbox_Types.mkVec2(-1)(1), Mathbox_Types.mkVec2(-1)(1) ]);
    $0.scale = new Mathbox_Field.Val(Mathbox_Types.mkVec3(1)(1)(1));
    return $0;
})())(new Data_List_Types.Cons(Mathbox_Mathbox.Axis.create((function () {
    var $3 = {};
    for (var $4 in Mathbox_Class_Draw_Axis.mkAxis) {
        if ({}.hasOwnProperty.call(Mathbox_Class_Draw_Axis.mkAxis, $4)) {
            $3[$4] = Mathbox_Class_Draw_Axis.mkAxis[$4];
        };
    };
    $3.width = axisWidth;
    $3.color = Mathbox_Field.Val.create(Mathbox_Types.unsafeMkColor("black"));
    return $3;
})()), new Data_List_Types.Cons(Mathbox_Mathbox.Camera.create((function () {
    var $6 = {};
    for (var $7 in Mathbox_Class_Camera_Camera.mkCamera) {
        if ({}.hasOwnProperty.call(Mathbox_Class_Camera_Camera.mkCamera, $7)) {
            $6[$7] = Mathbox_Class_Camera_Camera.mkCamera[$7];
        };
    };
    $6.proxy = new Mathbox_Field.Val(true);
    $6.position = new Data_Maybe.Just(camPos);
    return $6;
})()), new Data_List_Types.Cons(Mathbox_Mathbox.Transform3.create((function () {
    var $9 = {};
    for (var $10 in Mathbox_Class_Transform_Transform3.mkTransform3) {
        if ({}.hasOwnProperty.call(Mathbox_Class_Transform_Transform3.mkTransform3, $10)) {
            $9[$10] = Mathbox_Class_Transform_Transform3.mkTransform3[$10];
        };
    };
    $9.position = new Mathbox_Field.Val([ 2.0, 0.0, 1.2e-2 ]);
    return $9;
})())(new Data_List_Types.Cons(Mathbox_Mathbox.Grid.create((function () {
    var $12 = {};
    for (var $13 in Mathbox_Class_Draw_Grid.mkGrid) {
        if ({}.hasOwnProperty.call(Mathbox_Class_Draw_Grid.mkGrid, $13)) {
            $12[$13] = Mathbox_Class_Draw_Grid.mkGrid[$13];
        };
    };
    $12.axes = Mathbox_Field.Val.create(Mathbox_Types.mkSwizzle1([ 2, 3 ]));
    $12.width = new Mathbox_Field.Val(1.0);
    $12.color = Mathbox_Field.Val.create(Mathbox_Types.unsafeMkColor("green"));
    return $12;
})()), Data_List_Types.Nil.value)), new Data_List_Types.Cons(Mathbox_Mathbox.Transform4.create((function () {
    var $15 = {};
    for (var $16 in Mathbox_Class_Transform_Transform4.mkTransform4) {
        if ({}.hasOwnProperty.call(Mathbox_Class_Transform_Transform4.mkTransform4, $16)) {
            $15[$16] = Mathbox_Class_Transform_Transform4.mkTransform4[$16];
        };
    };
    $15.matrix = Mathbox_Field.Val.create(new Mathbox_Types.Mat4(1.0, 0.0, 0.0, 100000.0, 0.0, 1.0, 0.0, 100000.0, 0.0, 0.0, 1.0, 100000.0, 10000.0, 10000.0, 10000.0, 100000.0));
    $15.position = new Mathbox_Field.Val([ -2.0, 0.0, 1.2e-2 ]);
    return $15;
})())(new Data_List_Types.Cons(Mathbox_Mathbox.Grid.create((function () {
    var $18 = {};
    for (var $19 in Mathbox_Class_Draw_Grid.mkGrid) {
        if ({}.hasOwnProperty.call(Mathbox_Class_Draw_Grid.mkGrid, $19)) {
            $18[$19] = Mathbox_Class_Draw_Grid.mkGrid[$19];
        };
    };
    $18.axes = Mathbox_Field.Val.create(Mathbox_Types.mkSwizzle1([ 2, 3 ]));
    $18.width = new Mathbox_Field.Val(2.0);
    $18.color = Mathbox_Field.Val.create(Mathbox_Types.unsafeMkColor("green"));
    return $18;
})()), Data_List_Types.Nil.value)), new Data_List_Types.Cons(Mathbox_Mathbox.Transform4.create((function () {
    var $21 = {};
    for (var $22 in Mathbox_Class_Transform_Transform4.mkTransform4) {
        if ({}.hasOwnProperty.call(Mathbox_Class_Transform_Transform4.mkTransform4, $22)) {
            $21[$22] = Mathbox_Class_Transform_Transform4.mkTransform4[$22];
        };
    };
    $21.matrix = Mathbox_Field.Val.create(new Mathbox_Types.Mat4(1.0, 0.0, 0.0, 100000.0, 0.0, 1.0, 0.0, 100000.0, 0.0, 0.0, 1.0, 100000.0, 10000.0, 10000.0, 10000.0, 100000.0));
    $21.position = new Mathbox_Field.Val([ -2.0e-2, 0.0, 1.0 ]);
    return $21;
})())(new Data_List_Types.Cons(Mathbox_Mathbox.Grid.create((function () {
    var $24 = {};
    for (var $25 in Mathbox_Class_Draw_Grid.mkGrid) {
        if ({}.hasOwnProperty.call(Mathbox_Class_Draw_Grid.mkGrid, $25)) {
            $24[$25] = Mathbox_Class_Draw_Grid.mkGrid[$25];
        };
    };
    $24.axes = Mathbox_Field.Val.create(Mathbox_Types.mkSwizzle1([ 2, 1 ]));
    $24.width = new Mathbox_Field.Val(2.0);
    $24.color = Mathbox_Field.Val.create(Mathbox_Types.unsafeMkColor("blue"));
    return $24;
})()), Data_List_Types.Nil.value)), new Data_List_Types.Cons(Mathbox_Mathbox.Transform4.create((function () {
    var $27 = {};
    for (var $28 in Mathbox_Class_Transform_Transform4.mkTransform4) {
        if ({}.hasOwnProperty.call(Mathbox_Class_Transform_Transform4.mkTransform4, $28)) {
            $27[$28] = Mathbox_Class_Transform_Transform4.mkTransform4[$28];
        };
    };
    $27.matrix = Mathbox_Field.Val.create(new Mathbox_Types.Mat4(1.0, 0.0, 0.0, 100000.0, 0.0, 1.0, 0.0, 100000.0, 0.0, 0.0, 1.0, 100000.0, 10000.0, 10000.0, 10000.0, 100000.0));
    $27.position = new Mathbox_Field.Val([ -2.0e-2, 0.0, -1.0 ]);
    return $27;
})())(new Data_List_Types.Cons(Mathbox_Mathbox.Grid.create((function () {
    var $30 = {};
    for (var $31 in Mathbox_Class_Draw_Grid.mkGrid) {
        if ({}.hasOwnProperty.call(Mathbox_Class_Draw_Grid.mkGrid, $31)) {
            $30[$31] = Mathbox_Class_Draw_Grid.mkGrid[$31];
        };
    };
    $30.axes = Mathbox_Field.Val.create(Mathbox_Types.mkSwizzle1([ 2, 1 ]));
    $30.width = new Mathbox_Field.Val(2.0);
    $30.color = Mathbox_Field.Val.create(Mathbox_Types.unsafeMkColor("blue"));
    return $30;
})()), Data_List_Types.Nil.value)), new Data_List_Types.Cons(Mathbox_Mathbox.Transform4.create((function () {
    var $33 = {};
    for (var $34 in Mathbox_Class_Transform_Transform4.mkTransform4) {
        if ({}.hasOwnProperty.call(Mathbox_Class_Transform_Transform4.mkTransform4, $34)) {
            $33[$34] = Mathbox_Class_Transform_Transform4.mkTransform4[$34];
        };
    };
    $33.matrix = Mathbox_Field.Val.create(new Mathbox_Types.Mat4(1.0, 0.0, 0.0, 100000.0, 0.0, 1.0, 0.0, 100000.0, 0.0, 0.0, 1.0, 100000.0, 10000.0, 10000.0, 10000.0, 100000.0));
    $33.position = new Mathbox_Field.Val([ 0.0, -0.99, 0.0 ]);
    return $33;
})())(new Data_List_Types.Cons(Mathbox_Mathbox.Grid.create((function () {
    var $36 = {};
    for (var $37 in Mathbox_Class_Draw_Grid.mkGrid) {
        if ({}.hasOwnProperty.call(Mathbox_Class_Draw_Grid.mkGrid, $37)) {
            $36[$37] = Mathbox_Class_Draw_Grid.mkGrid[$37];
        };
    };
    $36.axes = Mathbox_Field.Val.create(Mathbox_Types.mkSwizzle1([ 1, 3 ]));
    $36.width = new Mathbox_Field.Val(2.0);
    $36.color = Mathbox_Field.Val.create(Mathbox_Types.unsafeMkColor("brown"));
    return $36;
})()), Data_List_Types.Nil.value)), new Data_List_Types.Cons(Mathbox_Mathbox.Transform4.create((function () {
    var $39 = {};
    for (var $40 in Mathbox_Class_Transform_Transform4.mkTransform4) {
        if ({}.hasOwnProperty.call(Mathbox_Class_Transform_Transform4.mkTransform4, $40)) {
            $39[$40] = Mathbox_Class_Transform_Transform4.mkTransform4[$40];
        };
    };
    $39.matrix = Mathbox_Field.Val.create(new Mathbox_Types.Mat4(1.0, 0.0, 0.0, 100000.0, 0.0, 1.0, 0.0, 100000.0, 0.0, 0.0, 1.0, 100000.0, 10000.0, 10000.0, 10000.0, 100000.0));
    $39.position = new Mathbox_Field.Val([ 0.0, 0.99, 0.0 ]);
    return $39;
})())(new Data_List_Types.Cons(Mathbox_Mathbox.Grid.create((function () {
    var $42 = {};
    for (var $43 in Mathbox_Class_Draw_Grid.mkGrid) {
        if ({}.hasOwnProperty.call(Mathbox_Class_Draw_Grid.mkGrid, $43)) {
            $42[$43] = Mathbox_Class_Draw_Grid.mkGrid[$43];
        };
    };
    $42.axes = Mathbox_Field.Val.create(Mathbox_Types.mkSwizzle1([ 1, 3 ]));
    $42.width = new Mathbox_Field.Val(1.0);
    $42.color = Mathbox_Field.Val.create(Mathbox_Types.unsafeMkColor("brown"));
    return $42;
})()), Data_List_Types.Nil.value)), Data_List_Types.Nil.value))))))))), Data_List_Types.Nil.value);

/**
 *  Main function 
 */
var main = Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Mathbox_Mathbox.mkMathbox({
    plugins: [ "core", "controls", "cursor" ], 
    controls: {
        klass: Mathbox_Mathbox.trackballControls
    }
}))(Mathbox_Mathbox.applyOnThree(Mathbox_Mathbox.setThreeClearColor(Mathbox_Mathbox.colorWhite)(1.0))))(Mathbox_Mathbox.set({
    focus: new Data_Maybe.Just(1.0), 
    scale: new Data_Maybe.Just(170.0)
})))(Mathbox_Mathbox.addAll(Data_Functor.map(Data_List_Types.functorList)(Mathbox_Mathbox.toJs)(mathbox)));
module.exports = {
    axisWidth: axisWidth, 
    camPos: camPos, 
    gridWidth: gridWidth, 
    main: main, 
    mathbox: mathbox
};