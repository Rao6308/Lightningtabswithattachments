public class ParentAccountAttachmentscontroller {
    
    @AuraEnabled
    public static List<Attachment>  getAttachmentlist(String parent_ID,String tab_name) {
        /*Set<Id> contentIds = new Set<Id>();
         for (ContentDocument cont :[Select Id ,Title from ContentDocument]) {
            contentIds.add(cont.Id);
        }

        return [SELECT Id,FileType,Title,Opportunity__c,ContentModifiedDate,DESCRIPTION FROM ContentVersion WHERE  Opportunity__c =: parent_ID and Content_Type__c =: tab_name];*/
      return   [SELECT Id,parentId, parent.type,Createdby.Name,Name,CreatedDate,LastModifiedDate,ContentType,Description from attachment where parentId =: parent_ID and Name =: tab_name Order by CreatedDate];
    }
     @AuraEnabled
    public static Id saveTheFile(Id parentId,String tab_name, String fileName, String base64Data, String contentType) { 
        base64Data = EncodingUtil.urlDecode(base64Data, 'UTF-8');
        
        Attachment a = new Attachment();
        a.parentId = parentId;
		a.Description = tab_name;
        a.Body = EncodingUtil.base64Decode(base64Data);
        a.Name = tab_name;
        a.ContentType = contentType;
        
        insert a;
        
        return a.Id;
    }
    
    
}