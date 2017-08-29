({
    injectComponent: function (cmp,name, target,tabname) {
        var parentId_val = cmp.get("v.recordId");
        $A.createComponent(name, {
        }, function (contentComponent, status, error) {
            if (status === "SUCCESS") {
                target.set('v.body', contentComponent);
                var parentIdpass = $A.get("e.c:ParentAccountAttachmentsEvent");
                parentIdpass.setParams(
                    {
                        "Parenid": parentId_val,
                        "tabname": tabname
                    }
                );
                parentIdpass.fire();  
            } else {
                throw new Error(error);
            }
        });
    }
})