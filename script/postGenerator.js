function AppViewModel() {
    this.openTag1 = ko.observable("<div");
    this.attrClass1 = ko.observable(" class='");
    this.className1 = ko.observable("width100p box--container");
    this.endClass1 = ko.observable("'");
    this.endOpenTag1 = ko.observable(">");

        this.openTag2_1 = ko.observable("<div");
        this.attrClass2_1 = ko.observable(" class='");
        this.className2_1 = ko.observable("box--header-container");
        this.endClass2_1 = ko.observable("'");
        this.endOpenTag2_1 = ko.observable(">");

            this.openTag3_1 = ko.observable("<h1");
            this.attrClass3_1 = ko.observable(" class='");
            this.className3_1 = ko.observable("width100p  maxwidth960  box-center");
            this.endClass3_1 = ko.observable("'");
            this.endOpenTag3_1 = ko.observable(">");
            this.contentTag3_1 = ko.observable("");
            this.closeTag3_1 = ko.observable("</h1>");

        this.openTag2_2 = ko.observable("<div");
        this.attrClass2_2 = ko.observable(" class='");
        this.className2_2 = ko.observable("width100p  maxwidth960  box-center  box--content");
        this.endClass2_2 = ko.observable("'");
        this.endOpenTag2_2 = ko.observable(">");
        
            this.openTag3_2 = ko.observable("<div");
            this.attrClass3_2 = ko.observable(" class='");
            this.className3_2 = ko.observable("box--date-container");
            this.endClass3_2 = ko.observable("'");
            this.endOpenTag3_2 = ko.observable(">");
            
                this.openTag4_1 = ko.observable("<p");
                this.attrClass4_1 = ko.observable(" class='");
                this.className4_1 = ko.observable("post-date");
                this.endClass4_1 = ko.observable("'");
                this.endOpenTag4_1 = ko.observable(">");
                this.contentTag4_1 = ko.observable("");
                this.closeTag4_1 = ko.observable("</p>");

            this.closeTag3_2 = ko.observable("</div>");

            this.openTag3_3 = ko.observable("<p");
            this.attrClass3_3 = ko.observable(" class='");
            this.className3_3 = ko.observable("box--content");
            this.endClass3_3 = ko.observable("'");
            this.endOpenTag3_3 = ko.observable(">");
            this.contentTag3_3 = ko.observable("");
            this.closeTag3_3 = ko.observable("</p>");

            this.openTag3_4 = ko.observable("<a");
            this.attrClass3_4 = ko.observable(" class='");
            this.className3_4 = ko.observable("box--source-link");
            this.endClass3_4 = ko.observable("'");
            this.attrHref3_4 = ko.observable(" href='");
            this.href3_4 = ko.observable("");
            this.endHref3_4 = ko.observable("'");
            this.attrTarget3_4 = ko.observable(" target='");
            this.target3_4 = ko.observable("_blank");
            this.endTarget3_4 = ko.observable("'");
            this.endOpenTag3_4 = ko.observable(">");
            this.contentTag3_4 = ko.observable("");
            this.closeTag3_4 = ko.observable("</a>");

        this.closeTag2_2 = ko.observable("</div>");

        this.closeTag2_1 = ko.observable("</div>");

    this.closeTag1 = ko.observable("</div>");
    
    this.fullName = ko.computed(function() {
        var line1 = this.openTag1() + this.attrClass1() + this.className1() + this.endClass1() + this.endOpenTag1(),
            line2 = this.openTag2_1() + this.attrClass2_1() + this.className2_1() + this.endClass2_1() + this.endOpenTag2_1();
        return  line1 + line2 +
                this.openTag3_1() +  
                this.attrClass3_1() + 
                this.className3_1() + 
                this.endClass3_1() + 
                this.endOpenTag3_1() + 
                this.contentTag3_1() + 
                this.closeTag3_1() +
            this.closeTag2_1() +
            this.openTag2_2() +  
            this.attrClass2_2() + 
            this.className2_2() + 
            this.endClass2_2() + 
            this.endOpenTag2_2() + 
                this.openTag3_2() +  
                this.attrClass3_2() + 
                this.className3_2() + 
                this.endClass3_2() + 
                this.endOpenTag3_2() + 
                    this.openTag4_1() +  
                    this.attrClass4_1() + 
                    this.className4_1() + 
                    this.endClass4_1() + 
                    this.endOpenTag4_1() + 
                    this.contentTag4_1() + 
                    this.closeTag4_1() +
                this.closeTag3_2() +

                this.openTag3_3() +  
                this.attrClass3_3() + 
                this.className3_3() + 
                this.endClass3_3() + 
                this.endOpenTag3_3() + 
                this.contentTag3_3() + 
                this.closeTag3_3() +

                this.openTag3_4() +  
                this.attrClass3_4() + 
                this.className3_4() + 
                this.endClass3_4() + 
                this.attrHref3_4() + 
                this.href3_4() + 
                this.endHref3_4() + 
                this.attrTarget3_4() + 
                this.target3_4() + 
                this.endTarget3_4() + 
                this.endOpenTag3_4() + 
                this.contentTag3_4() + 
                this.closeTag3_4() +

            this.closeTag2_2() +
        this.closeTag1();
    }, this);
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());