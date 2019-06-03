<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPages/WebForms.master" AutoEventWireup="true" CodeBehind="CharitySearch.aspx.cs" Inherits="Site.Areas.NPRP.Pages.CharitySearch" %>
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
                             <adx:Snippet runat="server" SnippetName="CharitySearch/SearchForm/Heading" DefaultText="Find an Existing Charity" Editable="True" EditType="text" AllowCreate="true" />
                        </legend>
                        <asp:ValidationSummary runat="server" CssClass="alert alert-block alert-danger" ValidationGroup="CharitySearch" />
				        <adx:Snippet runat="server" SnippetName="CharitySearch/SearchForm/Instructions" Editable="True" EditType="html" AllowCreate="true" />
                        <div class="form-group">
                             <asp:Label runat="server" AssociatedControlID="CharityNum" CssClass="col-sm-4 control-label">
                                <adx:Snippet runat="server" SnippetName="CharitySearch/SearchForm/CharityNumLabel" DefaultText="Charity #" Editable="True" EditType="text" AllowCreate="true" />
                                 <asp:CustomValidator runat="server" ClientValidationFunction="ValidateSearch" 
                                     ErrorMessage='<%$ Snippet:CharitySearch/SearchForm/SearchValidationMessage, You must enter an EIN Charity Name or Charity Number to proceed. %>'
                                     EnableClientScript="true" OnServerValidate="EIN_ServerValidate" ValidationGroup="CharitySearch" Display="None"></asp:CustomValidator>
                            </asp:Label>
					        <div class="col-sm-8">
                                <asp:TextBox runat="server" ID="CharityNum" CssClass="form-control"></asp:TextBox>
					        </div>
			            </div>
                        <div class="form-group">
                            <asp:Label runat="server" AssociatedControlID="CharityName" CssClass="col-sm-4 control-label">
                                <adx:Snippet runat="server" SnippetName="CharitySearch/SearchForm/CharityNameLabel" DefaultText="Charity Name" Editable="True" EditType="text" AllowCreate="true" />
                            </asp:Label>
					        <div class="col-sm-8">
                                <asp:TextBox runat="server" ID="CharityName" CssClass="form-control"></asp:TextBox>
					        </div>
				        </div>
                        <div class="form-group">
                            <asp:Label runat="server" AssociatedControlID="EIN" CssClass="col-sm-4 control-label">
                                <adx:Snippet runat="server" SnippetName="CharitySearch/SearchForm/EinLabel" DefaultText="EIN #" Editable="True" EditType="text" AllowCreate="true" />
                            </asp:Label>
					        <div class="col-sm-8">
                                <asp:TextBox runat="server" ID="EIN" CssClass="form-control"></asp:TextBox>
					        </div>
				        </div>			            
			            <div class="form-group">
				            <div class="col-sm-offset-4 col-sm-8 text-right">
                                <asp:Button ID="SearchCharity" runat="server" OnClick="SearchCharity_Click"
                                    Text='<%$ Snippet:CharitySearch/SearchForm/SearchButtonLabel, Find Charity %>'
                                    ToolTip='<%$ Snippet:CharitySearch/SearchForm/SearchButtonToolTip, Find Charity %>'
                                    CssClass="btn btn-primary" ValidationGroup="CharitySearch" />
				            </div>
			            </div>
		            </fieldset>
	            </div>
                <div class="top-border col-sm-11">
                    <adx:Snippet runat="server" SnippetName="CharitySearch/NewCharity/Instructions" Editable="True" EditType="html" AllowCreate="true" />
                    
                    <adx:CrmHyperLink runat="server" SiteMarkerName="Create Charity Page" CssClass="btn btn-success spacer-top"></adx:CrmHyperLink>
                </div>
		    </div>
		    <div class="col-md-6">
                <div class="form-horizontal col-sm-11">                    
		            <fieldset>
			            <legend>
                             <adx:Snippet runat="server" SnippetName="CharitySearch/InvitationForm/Heading" DefaultText="Enter My Invitation Code" Editable="True" EditType="text" AllowCreate="true" />
                        </legend>
                        <asp:ValidationSummary runat="server" CssClass="alert alert-block alert-danger" ValidationGroup="CharityInvitation" />
				        <asp:Panel runat="server" ID="InvitationErrorPanel" CssClass="alert alert-danger" Visible="false">
                            <adx:Snippet runat="server" SnippetName="CharitySearch/InvitationForm/ErrorMessage" DefaultText="The specified invitation code could not be found." Editable="True" EditType="html" AllowCreate="true" />
                        </asp:Panel>
                        <adx:Snippet runat="server" SnippetName="CharitySearch/InvitationForm/Instructions" Editable="True" EditType="html" AllowCreate="true" />
                        <div class="form-group">
                            <asp:Label runat="server" AssociatedControlID="InvitationCode" CssClass="col-sm-4 control-label">
                                <adx:Snippet runat="server" SnippetName="CharitySearch/InvitationForm/InvitationCodeLabel" DefaultText="Invitation Code" Editable="True" EditType="text" AllowCreate="true" />
                                <asp:RequiredFieldValidator runat="server"  ControlToValidate="InvitationCode" Display="None" ValidationGroup="CharityInvitation"
                                     ErrorMessage='<%$ Snippet:CharitySearch/InvitationForm/InvitationRequiredMessage, You must enter an Invitation Code to proceed. %>' />
                            </asp:Label>
					        <div class="col-sm-8">
                                <asp:TextBox runat="server" ID="InvitationCode" CssClass="form-control"></asp:TextBox>
					        </div>
				        </div>
			            <div class="form-group">
				            <div class="col-sm-offset-4 col-sm-8 text-right">
                                <asp:Button ID="SearchInvitationCode" runat="server" OnClick="SearchInvitationCode_Click"
                                    Text='<%$ Snippet:CharitySearch/InvitationForm/SearchButtonLabel, Submit Code %>'
                                    ToolTip='<%$ Snippet:CharitySearch/InvitationForm/SearchButtonToolTip, Search for Your Invitation Code %>'
                                    CssClass="btn btn-primary" ValidationGroup="CharityInvitation" />
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
            args.IsValid = ($('input[name*="$EIN"]').val() || $('input[name*="$CharityNum"]').val() || $('input[name*="$CharityName"]').val());
        }
    </script>
</asp:Content>
