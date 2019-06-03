<%--Location in Solution:Areas\NPRP\Pages\PFRSearch.aspx--%>
<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPages/WebForms.master" AutoEventWireup="true" CodeBehind="PFRSearch.aspx.cs" Inherits="Site.Areas.NPRP.Pages.PFRSearch" %>
<%@ Import Namespace="System.Web.Mvc.Html" %>
<%@ Import Namespace="Adxstudio.Xrm.Web.Mvc.Html" %>
<%@ Import Namespace="Site.Areas.NPRP.Extensions" %>
<%@ OutputCache CacheProfile="User" %>

<asp:Content runat="server" ContentPlaceHolderID="Head">
	<link rel="stylesheet" href="~/Areas/Account/css/account.css" />
    <link rel="stylesheet" href="/areas/NPRP/css/NPRP.css" />
</asp:Content>


<asp:Content runat="server" ContentPlaceHolderID="MainContent">
	<div class="page-content">
        <%: Html.HtmlAttribute("adx_copy", cssClass: "page-copy") %>
		<div class="row">
            <div class="col-md-6 right-border">
                <div class="form-horizontal col-sm-11">                    
		            <fieldset>
			            <legend>
                             <adx:Snippet runat="server" SnippetName="PFRSearch/SearchForm/Heading" DefaultText="Find an Existing PFR" Editable="True" EditType="text" AllowCreate="true" />
                        </legend>
                        <asp:ValidationSummary runat="server" CssClass="alert alert-block alert-danger" ValidationGroup="PFRSearch" />
				        <adx:Snippet runat="server" SnippetName="PFRSearch/SearchForm/Instructions" Editable="True" EditType="html" AllowCreate="true" />
                        <!--This block coment below removes the ability to search using PFR # and PFR name based on new phase 3 requirements  as of Tuesday, March 14, 2017 12:11:02 PM-->
                        <!--<div class="form-group">
                             <asp:Label runat="server" AssociatedControlID="PfrNum" CssClass="col-sm-4 control-label">
                                <adx:Snippet runat="server" SnippetName="PFRSearch/SearchForm/PfrNumLabel" DefaultText="PFR #" Editable="True" EditType="text" AllowCreate="true" />
                                 <asp:CustomValidator runat="server" ClientValidationFunction="ValidateSearch" 
                                     ErrorMessage='<%$ Snippet:PFRSearch/SearchForm/SearchValidationMessage, You must enter an EIN PFR Name or PFR Number to proceed. %>'
                                     EnableClientScript="true" OnServerValidate="EIN_ServerValidate" ValidationGroup="PFRSearch" Display="None"></asp:CustomValidator>
                            </asp:Label>
					        <div class="col-sm-8">
                                <asp:TextBox runat="server" ID="PfrNum" CssClass="form-control"></asp:TextBox>
					        </div>
			            </div>
                        <div class="form-group">
                            <asp:Label runat="server" AssociatedControlID="PfrName" CssClass="col-sm-4 control-label">
                                <adx:Snippet runat="server" SnippetName="PFRSearch/SearchForm/PfrNameLabel" DefaultText="PFR Name" Editable="True" EditType="text" AllowCreate="true" />
                            </asp:Label>
					        <div class="col-sm-8">
                                <asp:TextBox runat="server" ID="PfrName" CssClass="form-control"></asp:TextBox>
					        </div>
				        </div>-->
                        <%--Edit EIN Field Label tooltip here--%>	
                        <div class="form-group">
                            <asp:Label runat="server" AssociatedControlID="EIN" CssClass="col-sm-4 control-label" href="#" data-toggle="popover" data-trigger="hover" data-content="This is the nine digit number assigned to you by the IRS  https://www.irs.gov. Do not use a hyphen or additional spacing.">
                                <adx:Snippet runat="server" SnippetName="PFRSearch/SearchForm/EinLabel" DefaultText="EIN #" Editable="True" EditType="text" AllowCreate="true" />
                            </asp:Label>
                        <%--EIN Field Label Tooltip JavaScript--%>	
                                <script>
                                    $(document).ready(function(){
                                        $('[data-toggle="popover"]').popover({trigger:"hover", placement:"bottom", delay: {show: 0, hide: 100}});   
                                    });
                                </script> 
                        <%--Edit EIN Input Textbox tooltip here--%>	                           
					        <div class="col-sm-8">
                                <asp:TextBox runat="server" ID="EIN" 
                                ToolTip ='This is the nine digit number assigned to you by the IRS  https://www.irs.gov. Do not use a hyphen or additional spacing.'
                                CssClass="form-control">
                                </asp:TextBox>
					        </div>
				        </div>			            
			            <div class="form-group">
				            <div class="col-sm-offset-4 col-sm-8 text-right">
                                <asp:Button ID="btnPFRSearch" runat="server" OnClick="PFRSearch_Click"
                                    Text='<%$ Snippet:PFRSearch/SearchForm/SearchButtonLabel, Find PFR %>'
                                    ToolTip='<%$ Snippet:PFRSearch/SearchForm/SearchButtonToolTip, Find PFR %>'
                                    CssClass="btn btn-primary" ValidationGroup="PFRSearch" />
				            </div>
			            </div>
		            </fieldset>
	            </div>
                <div class="top-border col-sm-11">
                    <adx:Snippet runat="server" SnippetName="PFRSearch/NewPFR/Instructions" Editable="True" EditType="html" AllowCreate="true" />
                    
                    <adx:CrmHyperLink runat="server" SiteMarkerName="Create PFR Page" CssClass="btn btn-success spacer-top"></adx:CrmHyperLink>
                </div>
		    </div>
		    <div class="col-md-6">
                <div class="form-horizontal col-sm-11">                    
		            <fieldset>
			            <legend>
                             <adx:Snippet runat="server" SnippetName="PFRSearch/InvitationForm/Heading" DefaultText="Enter My Invitation Code" Editable="True" EditType="text" AllowCreate="true" />
                        </legend>
                        <asp:ValidationSummary runat="server" CssClass="alert alert-block alert-danger" ValidationGroup="PfrInvitation" />
				        <asp:Panel runat="server" ID="InvitationErrorPanel" CssClass="alert alert-danger" Visible="false">
                            <adx:Snippet runat="server" SnippetName="PFRSearch/InvitationForm/ErrorMessage" DefaultText="The specified invitation code could not be found." Editable="True" EditType="html" AllowCreate="true" />
                        </asp:Panel>
                        <adx:Snippet runat="server" SnippetName="PFRSearch/InvitationForm/Instructions" Editable="True" EditType="html" AllowCreate="true" />
                        <div class="form-group">
                            <asp:Label runat="server" AssociatedControlID="InvitationCode" CssClass="col-sm-4 control-label">
                                <adx:Snippet runat="server" SnippetName="PFRSearch/InvitationForm/InvitationCodeLabel" DefaultText="Invitation Code" Editable="True" EditType="text" AllowCreate="true" />
                                <asp:RequiredFieldValidator runat="server"  ControlToValidate="InvitationCode" Display="None" ValidationGroup="PfrInvitation"
                                     ErrorMessage='<%$ Snippet:PFRSearch/InvitationForm/InvitationRequiredMessage, You must enter an Invitation Code to proceed. %>' />
                            </asp:Label>
					        <div class="col-sm-8">
                                <asp:TextBox runat="server" ID="InvitationCode" CssClass="form-control"></asp:TextBox>
					        </div>
				        </div>
			            <div class="form-group">
				            <div class="col-sm-offset-4 col-sm-8 text-right">
                                <asp:Button ID="SearchInvitationCode" runat="server" OnClick="SearchInvitationCode_Click"
                                    Text='<%$ Snippet:PFRSearch/InvitationForm/SearchButtonLabel, Submit Code %>'
                                    ToolTip='<%$ Snippet:PFRSearch/InvitationForm/SearchButtonToolTip, Search for Your Invitation Code %>'
                                    CssClass="btn btn-primary" ValidationGroup="PfrInvitation" />
				            </div>
			            </div>
		            </fieldset>
	            </div>
		    </div>
		
	    </div>
	</div>
</asp:Content>

<asp:Content ContentPlaceHolderID="Scripts" runat="server">
    <script type="text/javascript">
        //Validation Functions
        function ValidateSearch(sender, args) {
            args.IsValid = ($('input[name*="$EIN"]').val() || $('input[name*="$PfrNum"]').val() || $('input[name*="$PfrName"]').val());
        }
    </script>
</asp:Content>
