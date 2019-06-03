function OnLoadTooltip()
{
      AddToolTip( "crs_federalein" , "ToolTip ToolTip ToolTip ToolTip" );
      AddToolTip( "name" , "ToolTip ToolTip ToolTip ToolTip" );  
}
 
var TooltipPopup = null;
 
function AddToolTip( controlId , toolTip )
{
      var control = document.getElementById( controlId );
            control.ToolTip  = toolTip;
            control.attachEvent( "onmouseover"  , ShowToolTip );
            control.attachEvent( "onfocus"      , ShowToolTip );
            control.attachEvent( "onmouseout"   , HideToolTip );
}
 
function ShowToolTip()
{
      var control       = event.srcElement;   
            TooltipPopup = window.createPopup();
      var ToolTipHTML  = "<DIV style='width:100%;height:100%;border:1px solid gray;background-color: #d8e8ff;filter: progid: DXImageTransform.Microsoft.Gradient(GradientType=0,StartColorStr=#ffffff,EndColorStr=#cecfde);padding-left:2px;font:12px tahoma'>" + control.ToolTip + "</DIV>";
            TooltipPopup.document.body.innerHTML = ToolTipHTML;
     
      var Width  = control.offsetWidth;
      var Height = 53;
      var Position = GetControlPostion ( control );        
      var Left   = Position.X + 1;
      var Top    = Position.Y + 1;
            TooltipPopup.show( Left , Top , Width , Height , null );
}
 
function GetControlPostion( control )
{
      var Position = new Object();
      var controlHeight = control.offsetHeight;
     
      var iY = 0, iX = 0;
      while( control != null )
      {
            iY += control.offsetTop;
            iX += control.offsetLeft;
            control = control.offsetParent;
      }
     
      Position.X = iX + screenLeft;
      Position.Y = iY + screenTop + controlHeight;
     
      return Position;
}
 
 
function HideToolTip()
{
      if( TooltipPopup )
          TooltipPopup.hide();
}
 
OnLoadTooltip();