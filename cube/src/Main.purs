module Main where

-- import Statments
import Prelude
import Control.Monad.Eff
import Data.List
import Data.Maybe
import Prim as P
import Math as Math

import Mathbox.Classes as C
import Mathbox.Field
import Mathbox.Mathbox
import Mathbox.Types 

-- Cube Rotation problem developed by purescript
-- Designed by Arunkumar Angappan IV-BE-CSE, SASURIE COLLEGE OF ENGINEERING

camPos = Val $ mkVec3 2 1 6 -- vector postion in the plane



axisWidth = Val 0.0 -- axis width to measure the axis range


gridWidth = Val 2.0 -- grid width


mathbox :: List MathboxPrimitive
mathbox =
 
  (Cartesian $ C.mkCartesian {  
  
    range = Val [mkVec2 (-2) 2, mkVec2 (-1) 1, mkVec2 (-1) 1], 
    scale = Val (mkVec3 1 1 1) }) (
    
     (Axis $ C.mkAxis { width = axisWidth, color = Val $ unsafeMkColor "black" }) :
  
     
    
     (Camera $ C.mkCamera { proxy = Val true, position = Just camPos }) :
     
    
     ((Transform3 $ C.mkTransform3 { position = Val [2.0, 0.0, 0.012] })
     
      ((Grid $ C.mkGrid { axes = Val $ mkSwizzle1 [2, 3], width = Val 1.0, color = Val $ unsafeMkColor "green" }) : Nil)
    ) :
((Transform4 $ C.mkTransform4 {matrix = Val $ Mat4
      1.0 0.0 0.0 100000.0
      0.0 1.0 0.0 100000.0
      0.0 0.0 1.0 100000.0
      10000.0 10000.0 10000.0 100000.0, position = Val [-2.0, 0.0, 0.012] })
      ((Grid $ C.mkGrid { axes = Val $ mkSwizzle1 [2, 3], width = Val 2.0, color = Val $ unsafeMkColor "green"}) : Nil)
    ) :
    
-- one paralell grid set
    
    ((Transform4 $ C.mkTransform4 {matrix = Val $ Mat4
      1.0 0.0 0.0 100000.0
      0.0 1.0 0.0 100000.0
      0.0 0.0 1.0 100000.0
      10000.0 10000.0 10000.0 100000.0, position = Val [-0.02, 0.0, 1.0] })
      ((Grid $ C.mkGrid { axes = Val $ mkSwizzle1 [2, 1], width = Val 2.0, color = Val $ unsafeMkColor "blue"}) : Nil)
    ) : 
    
    ((Transform4 $ C.mkTransform4 {matrix = Val $ Mat4
      1.0 0.0 0.0 100000.0
      0.0 1.0 0.0 100000.0
      0.0 0.0 1.0 100000.0
      10000.0 10000.0 10000.0 100000.0, position = Val [-0.02, 0.0, -1.0] })
      ((Grid $ C.mkGrid { axes = Val $ mkSwizzle1 [2, 1], width = Val 2.0, color = Val $ unsafeMkColor "blue" }) : Nil)
    ) :
    
     
-- second paralell grid set
    
    ((Transform4 $ C.mkTransform4 {matrix = Val $ Mat4
      1.0 0.0 0.0 100000.0
      0.0 1.0 0.0 100000.0
      0.0 0.0 1.0 100000.0
      10000.0 10000.0 10000.0 100000.0, position = Val [0.0, -0.99 , 0.0] })
      ((Grid $ C.mkGrid { axes = Val $ mkSwizzle1 [1, 3], width = Val 2.0, color = Val $ unsafeMkColor "brown" }) : Nil)
    ) :
        
    ((Transform4 $ C.mkTransform4 {matrix = Val $ Mat4
      1.0 0.0 0.0 100000.0
      0.0 1.0 0.0 100000.0
      0.0 0.0 1.0 100000.0
      10000.0 10000.0 10000.0 100000.0, position = Val [0.0, 0.99, 0.0] })
      ((Grid $ C.mkGrid { axes = Val $ mkSwizzle1 [1, 3], width = Val 1.0, color = Val $ unsafeMkColor "brown" }) : Nil)
    ) :
-- thrid paralell grid set
    
    Nil
  ) :
  Nil
-- Main function 
main = do 
  mkMathbox { plugins: ["core", "controls", "cursor"] 
            , controls: { klass: trackballControls } -- Drag,swipe,touch Events control
            } >>=
  applyOnThree (setThreeClearColor colorWhite 1.0) >>=
  set { focus: Just 1.0, scale: Just 170.0 } >>= -- seting grid focus and scale
  addAll (map toJs mathbox) -- mapping mathbox to js
  
  -- copyrights reserved by Arun @juspay
  
  