({
    doInit: function (component,event,helper){
    },
    setParentId: function (component,event,helper) {
        var parentID = event.getParam("Parenid");
        var tabname  = event.getParam("tabname");
        component.set("v.Parenidfromcomp", parentID);
        component.set("v.Tabnamefromcomp", tabname);
        var action = component.get("c.getAttachmentlist");	
        action.setParams({
            "parent_ID" : parentID,
            "tab_name"	: tabname
        });       
        action.setCallback(this,function(a){
            component.set("v.attachlist",a.getReturnValue());
        });       
        $A.enqueueAction(action);
    },
    save : function(component, event, helper) {
        var fileInput = component.find("file").getElement();
        var file = fileInput.files[0];
        if(file == null){
            alert('Please Select file to Continue.')
        }
        else{
            helper.save(component);
        }
    },
    afterScriptload:function(component, event, helper) {

    }
    
})