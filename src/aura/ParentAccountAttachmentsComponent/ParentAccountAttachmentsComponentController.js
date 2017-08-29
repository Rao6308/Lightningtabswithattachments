({
    handleActive: function (cmp, event,helper) {
        var tab = event.getSource();
        var tabname = event.getSource().get("v.id");
        helper.injectComponent(cmp,'c:attachdata',tab,tabname); 
    }
    
})