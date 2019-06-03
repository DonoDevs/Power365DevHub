<%@ Page Language="C#" MasterPageFile="~/MasterPages/WebForms.master" AutoEventWireup="true" CodeBehind="CharityRegistrationList.aspx.cs" Inherits="Site.Pages.CharityRegistrationList" ValidateRequest="false" EnableEventValidation="false" %>
<%@ Import Namespace="System.Web.Mvc.Html" %>
<%@ Import Namespace="Adxstudio.Xrm.Web.Mvc.Html" %>
<%@ Import Namespace="Site.Areas.NPRP.Extensions" %>
<%@ Import Namespace="Site.Areas.NPRP.Library" %>
<%@ OutputCache CacheProfile="User" %>

<asp:Content ContentPlaceHolderID="Breadcrumbs" runat="server">
    <%: Html.ManageCharityBreadcrumbs(id:Request.QueryString["id"], cid:Request.QueryString["cid"]) %>
</asp:Content>

<asp:Content ContentPlaceHolderID="PageHeader" runat="server">
	<crm:CrmEntityDataSource ID="CurrentEntity" DataItem="<%$ CrmSiteMap: Current %>" runat="server" />
    <asp:Panel ID="HeaderPanel" runat="server">
		<div class="page-header">
			<h1>
				<asp:Literal ID="CharityName" runat="server"></asp:Literal> <adx:Property ID="PageTitle" DataSourceID="CurrentEntity" PropertyName="adx_title,adx_name" EditType="text" runat="server" />
			</h1>
		</div>
		<div class="notifications"></div>
    </asp:Panel>
</asp:Content>

<asp:Content ContentPlaceHolderID="MainContent" runat="server" ViewStateMode="Enabled">
    <asp:Panel ID="AccessDeniedPanel" runat="server" Visible="false">
        <div class="row">
		    <div class="col-md-10 col-md-offset-1">
                <div class="alert alert-danger">
                    <%: Html.HtmlSnippet("CharitiesLanding/AccessDeniedMessage",liquidEnabled:true) %>
                </div>
            </div>
        </div>
    </asp:Panel>

    <asp:Panel ID="ActiveCharityPanel" runat="server">
	    <div class="row">
            <div class="col-md-4">
			    <div class="sidebar">
                    <% Html.RenderPartial("~/Areas/NPRP/Views/Shared/CharityNavigation.ascx"); %>
			    </div>
		    </div>
		    <div class="col-md-8">
			    <%: Html.HtmlAttribute("adx_copy", cssClass: "page-copy") %>
				<div class="row">
				<div class="col-md-4 pull-right">
                    <adx:SiteMarkerLinkButton ID="CreateButton" runat="server" SiteMarkerName="Create Charity Registration" CssClass="btn btn-block btn-md btn-primary" OnInit="CreateButton_Init">
                        <span class="fa fa-plus-circle" aria-hidden="true"></span>
                        <adx:Snippet runat="server" SnippetName="CharitiesHome/CharityRegistration/CreateNewRegistrationButton" DefaultText="Create New Registration" Editable="true" EditType="text"/>
                    </adx:SiteMarkerLinkButton>
				</div></div>
                <asp:UpdatePanel ID="RegistrationListPanel" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                        <asp:UpdateProgress ID="UpdateProgress1" runat="server">
                            <ProgressTemplate>
                                <img src="~/xrm-adx/samples/images/ajax-loader.gif" alt="loading" />
                            </ProgressTemplate>
                        </asp:UpdateProgress>
                        <asp:ObjectDataSource runat="server" ID="RegistrationListDataSource" EnablePaging="true"
                            TypeName="Site.Areas.NPRP.Contollers.CharityRegistrationsController" OnObjectCreating="RegistrationListDataSource_ObjectCreating"
                            SelectMethod="Select" SelectCountMethod="SelectCount" SortParameterName="sortExpression" />

                        <asp:ListView runat="server" ID="RegistrationList" DataSourceID="RegistrationListDataSource" DataKeyNames="RegistrationId">
                            <LayoutTemplate>
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover">
                                        <thead>
                                            <%--<th class="col-md-3">
                                                <asp:LinkButton ID="LinkButtonCharity" runat="server" CommandArgument="CharityName" CommandName="Sort">
                                                    <adx:Snippet runat="server" SnippetName="CharityRegistrations/List/CharityNameHeader" DefaultText="Charity Name" Editable="True" EditType="text" AllowCreate="true" />
                                                </asp:LinkButton>
                                            </th>--%>
                                            <th class="col-md-4 sort-enabled">
                                                <asp:LinkButton ID="LinkButtonName" runat="server" CommandArgument="Name" CommandName="Sort">
                                                    <adx:Snippet runat="server" SnippetName="CharityRegistrations/List/RegistrationNameHeader" DefaultText="Registration" Editable="True" EditType="text" AllowCreate="true" />
                                                </asp:LinkButton>
                                            </th>
                                            <th class="col-md-1 hidden-sm hidden-xs">
                                                <asp:LinkButton ID="IsInitial" runat="server" CommandArgument="IsRenewal" CommandName="Sort">
                                                    <adx:Snippet runat="server" SnippetName="CharityRegistrations/List/IsInitialHeader" DefaultText="Initial or Renewal" Editable="True" EditType="text" AllowCreate="true" />
                                                </asp:LinkButton>
                                            </th>
                                            <th class="col-md-1">
                                                <asp:LinkButton ID="LinkButtonFYED" runat="server" CommandArgument="FiscalYearEnd" CommandName="Sort">
                                                    <adx:Snippet runat="server" SnippetName="CharityRegistrations/List/FiscalYearEndHeader" DefaultText="Fiscal Year End Date" Editable="True" EditType="text" AllowCreate="true" />
                                                </asp:LinkButton>
                                            </th>
                                            <th class="col-md-1">
                                                <asp:LinkButton ID="LinkButtonDueDate" runat="server" CommandArgument="DueDate" CommandName="Sort">
                                                    <adx:Snippet runat="server" SnippetName="CharityRegistrations/List/DueDateHeader" DefaultText="Due Date" Editable="True" EditType="text" AllowCreate="true" />
                                                </asp:LinkButton>
                                            </th>                                            
                                           <%-- <th class="col-md-1">
                                                <asp:LinkButton ID="LinkButtonPortalStatus" runat="server" CommandArgument="PortalStatusLabel" CommandName="Sort">
                                                    <adx:Snippet runat="server" SnippetName="PFRRegistrations/List/PortalStatusHeader" DefaultText="Status" Editable="True" EditType="text" AllowCreate="true" />
                                                </asp:LinkButton>
                                            </th>--%>
                                            <th class="col-md-1">
                                                <asp:LinkButton ID="LinkButtonStatus" runat="server" CommandArgument="StatusLabel" CommandName="Sort">
                                                    <adx:Snippet runat="server" SnippetName="CharityRegistrations/List/StatusHeader" DefaultText="Status" Editable="True" EditType="text" AllowCreate="true" />
                                                </asp:LinkButton>
                                            </th>
                                            <th class="col-md-1">&nbsp;</th>
                                        </thead>
                                        <asp:PlaceHolder ID="itemPlaceholder" runat="server" />
                                    </table>
                                </div>
                                <adx:UnorderedListDataPager PagedControlID="RegistrationList" CssClass="pagination" QueryStringField="page"  runat="server" 
                                    PageSize='<%$ SiteSetting: CharityRegistrations/List/PageSize, 10 %>' ID="RegistrationListPager">
			                        <Fields>
			                            <adx:ListItemNextPreviousPagerField ShowNextPageButton="false" ShowFirstPageButton="True" FirstPageText="&laquo;" PreviousPageText="&lsaquo;" />
			                            <adx:ListItemNumericPagerField ButtonCount="10" PreviousPageText="&hellip;" NextPageText="&hellip;" />
			                            <adx:ListItemNextPreviousPagerField ShowPreviousPageButton="false" ShowLastPageButton="True" LastPageText="&raquo;" NextPageText="&rsaquo;" />
		                            </Fields>
		                        </adx:UnorderedListDataPager>
                            </LayoutTemplate>
                            <ItemTemplate>
                                <tr>
                                    <%--<td style="vertical-align: middle;">                                
                                        <%#: Eval("CharityName")%>
                                    </td>--%>
                                    <td style="vertical-align: middle;">
                                        <asp:Panel runat="server" Visible='<%# (int)Eval("StatusID")==(int)Enums.RegistrationStatus.Approved || (int)Eval("StatusID")==(int)Enums.RegistrationStatus.InProgress %>'>
                                            <a href="<%: Html.SiteMarkerUrl("View Charity Registration") %>?RegistrationId=<%#: Eval("RegistrationId") %>&id=<%:Request.QueryString["id"]%>&cid=<%:Request.QueryString["cid"]%>&type=account">
                                                <%#: Eval("Name")%>
                                            </a>
                                        </asp:Panel>
                                        <asp:Panel runat="server" Visible='<%# (int)Eval("StatusID")!=(int)Enums.RegistrationStatus.Approved && (int)Eval("StatusID")!=(int)Enums.RegistrationStatus.InProgress %>'>
                                            <a href="<%: Html.SiteMarkerUrl("Edit Charity Registration") %>?RegistrationId=<%#: Eval("RegistrationId") %>&id=<%:Request.QueryString["id"]%>&cid=<%:Request.QueryString["cid"]%>&type=account">
                                                <%#: Eval("Name")%>
                                            </a>
                                        </asp:Panel>
                                    </td>
                                    <td style="vertical-align: middle;" class="hidden-sm hidden-xs">
                                        <%# (bool)Eval("IsRenewal")? "Renewal":"Initial" %>
                                    </td>
                                    <td style="vertical-align: middle;">
                                        <abbr class="dtstart"><%# (DateTime)Eval("FiscalYearEnd")>=new DateTime(1900,1,1) ? Eval("FiscalYearEnd", "{0:MM/dd/yyyy}"):"" %></abbr>
                                    </td>
                                    <td style="vertical-align: middle;">
                                        <abbr class="dtend"><%# (DateTime)Eval("DueDate")>=new DateTime(1900,1,1) ? Eval("DueDate", "{0:MM/dd/yyyy}"):"" %></abbr>
                                    </td>                                    
                                    <%--<td style="vertical-align: middle;">
                                        <%#: Eval("PortalStatusLabel")%>
                                    </td>--%>
                                    <td style="vertical-align: middle;">
                                        <%#: Eval("StatusLabel")%>
                                    </td>
                                    <td style="vertical-align: middle;">
                                        <asp:Panel ID="Panel1" runat="server" Visible='<%# ((int)Eval("StatusID")==(int)Enums.RegistrationStatus.InProgress) || ((int)Eval("StatusID")==(int)Enums.RegistrationStatus.Approved  && (int)Eval("AmendmentRequested")==(int)Enums.RegistrationAmendmentRequested.No )
                                                                                                                                                 || ((int)Eval("StatusID")==(int)Enums.RegistrationStatus.Approved && (int)Eval("AmendmentRequested")==(int)Enums.RegistrationAmendmentRequested.Yes && (int)Eval("AmendmentStatusID")==(int)Enums.RegistrationAmendmentStatus.Completed  )   %>'>
                                            <a href="<%: Html.SiteMarkerUrl("View Charity Registration") %>?RegistrationId=<%#: Eval("RegistrationId") %>&id=<%:Request.QueryString["id"]%>&cid=<%:CharityContact%>&type=account">
                                                <%: Html.SnippetLiteral("CharityRegistrations/List/ViewLink","View") %>
                                            </a>
                                        </asp:Panel>
                                        <asp:Panel ID="Panel2" runat="server" Visible='<%# ((int)Eval("StatusID")==(int)Enums.RegistrationStatus.New) || ((int)Eval("StatusID")==(int)Enums.RegistrationStatus.Approved && (int)Eval("AmendmentRequested")==(int)Enums.RegistrationAmendmentRequested.Yes && (int)Eval("AmendmentStatusID")==(int)Enums.RegistrationAmendmentStatus.Open )  %>'>
                                            <a href="<%: Html.SiteMarkerUrl("Edit Charity Registration") %>?RegistrationId=<%#: Eval("RegistrationId") %>&id=<%:Request.QueryString["id"]%>&cid=<%:CharityContact%>&type=account">
                                                <%: Html.SnippetLiteral("CharityRegistrations/List/EditLink","Edit") %>
                                            </a>
                                        </asp:Panel>
                                    </td>
                                </tr>
                            </ItemTemplate>
                            <EmptyDataTemplate>
                                <div class="alert alert-info">
                                    <adx:Snippet runat="server" DefaultText="There are currently no registrations for the selected charity." SnippetName="CharityRegistrations/List/EmptyListText" Editable="True" EditType="text" AllowCreate="true" />
                                </div>
                            </EmptyDataTemplate>
                        </asp:ListView>
			        </ContentTemplate>
                </asp:UpdatePanel>            
		    </div>
		
	    </div>
    </asp:Panel>

    <asp:Panel ID="NOISPanel" runat="server">
	    <div class="row">
            <div class="col-md-4">
			    <div class="sidebar">
                    <% Html.RenderPartial("~/Areas/NPRP/Views/Shared/CharityNavigationNOIS.ascx"); %>
			    </div>
		    </div>
		    <div class="col-md-8">
			    <%--<%: Html.HtmlAttribute("adx_copy", cssClass: "page-copy") %>--%>

			    <script type="text/javascript">
			        function entityFormClientValidate() {
			            // Custom client side validation. Method is called by the submit button's onclick event.
			            // Must return true or false. Returning false will prevent the form from submitting.
			            return true;
			        }

			        function webFormClientValidate() {
			            // Custom client side validation. Method is called by the next/submit button's onclick event.
			            // Must return true or false. Returning false will prevent the form from submitting.
			            return true;
			        }
			    </script>
			    <%--<adx:WebForm ID="WebForm1" runat="server" FormCssClass="crmEntityFormView" PreviousButtonCssClass="btn btn-default" NextButtonCssClass="btn btn-primary" SubmitButtonCssClass="btn btn-primary" ClientIDMode="Static" LanguageCode="<%$ SiteSetting: Language Code, 0 %>" PortalName="<%$ SiteSetting: Language Code %>" />
			    <adx:EntityForm ID="EntityFormControl2" runat="server" FormCssClass="crmEntityFormView" PreviousButtonCssClass="btn btn-default" NextButtonCssClass="btn btn-primary" SubmitButtonCssClass="btn btn-primary" ClientIDMode="Static" LanguageCode="<%$ SiteSetting: Language Code, 0 %>" PortalName="<%$ SiteSetting: Language Code %>" />
			    <adx:EntityList ID="EntityLIstControl2" runat="server" ListCssClass="table table-striped" DefaultEmptyListText="There are no items to display." ClientIDMode="Static" LanguageCode="<%$ SiteSetting: Language Code, 0 %>" PortalName="<%$ SiteSetting: Language Code %>" />--%>
		    </div>
		
	    </div>
    </asp:Panel>


</asp:Content>

<asp:Content ContentPlaceHolderID="ContentBottom" runat="server">
	
</asp:Content>

<asp:Content runat="server" ContentPlaceHolderID="Head">
    <link rel="stylesheet" href="/areas/NPRP/css/NPRP.css">
                    </asp:Content>