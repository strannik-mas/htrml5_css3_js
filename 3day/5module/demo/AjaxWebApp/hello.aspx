<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="hello.aspx.cs" Inherits="AjaxWebApp.hello" %>

<%=(string.IsNullOrEmpty(Request["name"])) ? "Hello!" : string.Format("Hello, {0}", Request["name"]) %>