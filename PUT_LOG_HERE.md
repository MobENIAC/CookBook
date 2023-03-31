<System>
            <Provider Name=".NET Runtime"/>
            <EventID>1000</EventID>
            <Level>1</Level>
            <Task>0</Task>
            <Keywords>Keywords</Keywords>
            <TimeCreated SystemTime="2023-03-30T08:05:46Z"/>
            <EventRecordID>-2043839015</EventRecordID>
            <Channel>Application</Channel>
            <Computer>WEBWK000003</Computer>
            <Security/>
        </System>
        <EventData>
            <Data>Category: Microsoft.AspNetCore.Server.IIS.Core.IISHttpServer
EventId: 2
SpanId: f2b4b528791145c2
TraceId: 0076de941c6626aa24b0d1a3fce0fac9
ParentId: 0000000000000000
RequestId: 80003de5-0002-d900-b63f-84710c7967bb
RequestPath: /api/Ai
Connection ID "15636497916430925282", Request ID "80003de5-0002-d900-b63f-84710c7967bb": An unhandled exception was thrown by the application.
Exception:
System.Security.Authentication.AuthenticationException: You must provide API authentication.  Please refer to https://github.com/OkGoDoIt/OpenAI-API-dotnet#authentication for details.
   at OpenAI_API.EndpointBase.GetClient()
   at OpenAI_API.EndpointBase.HttpRequestRaw(String url, HttpMethod verb, Object postData, Boolean streaming)
   at OpenAI_API.EndpointBase.HttpRequest[T](String url, HttpMethod verb, Object postData)
   at OpenAI_API.EndpointBase.HttpPost[T](String url, Object postData)
   at OpenAI_API.Completions.CompletionEndpoint.CreateCompletionAsync(CompletionRequest request)
   at CookBook.Api.Controllers.AiController.UseChatGPT(String query) in D:\a\CookBook\CookBook\CookBook.Api\Controllers\AiController.cs:line 47
   at Microsoft.AspNetCore.Mvc.Infrastructure.ActionMethodExecutor.TaskOfIActionResultExecutor.Execute(ActionContext actionContext, IActionResultTypeMapper mapper, ObjectMethodExecutor executor, Object controller, Object[] arguments)
   at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.&lt;InvokeActionMethodAsync&gt;g__Awaited|12_0(ControllerActionInvoker invoker, ValueTask`1 actionResultValueTask)
   at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.&lt;InvokeNextActionFilterAsync&gt;g__Awaited|10_0(ControllerActionInvoker invoker, Task lastTask, State next, Scope scope, Object state, Boolean isCompleted)
   at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.Rethrow(ActionExecutedContextSealed context)
   at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.Next(State&amp; next, Scope&amp; scope, Object&amp; state, Boolean&amp; isCompleted)
   at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.InvokeInnerFilterAsync()
--- End of stack trace from previous location ---
   at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.&lt;InvokeFilterPipelineAsync&gt;g__Awaited|20_0(ResourceInvoker invoker, Task lastTask, State next, Scope scope, Object state, Boolean isCompleted)
   at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.&lt;InvokeAsync&gt;g__Awaited|17_0(ResourceInvoker invoker, Task task, IDisposable scope)
   at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.&lt;InvokeAsync&gt;g__Awaited|17_0(ResourceInvoker invoker, Task task, IDisposable scope)
   at Microsoft.AspNetCore.Routing.EndpointMiddleware.&lt;Invoke&gt;g__AwaitRequestTask|6_0(Endpoint endpoint, Task requestTask, ILogger logger)
   at Microsoft.AspNetCore.Authorization.AuthorizationMiddleware.Invoke(HttpContext context)
   at Swashbuckle.AspNetCore.SwaggerUI.SwaggerUIMiddleware.Invoke(HttpContext httpContext)
   at Swashbuckle.AspNetCore.Swagger.SwaggerMiddleware.Invoke(HttpContext httpContext, ISwaggerProvider swaggerProvider)
   at Microsoft.AspNetCore.Authentication.AuthenticationMiddleware.Invoke(HttpContext context)
   at Microsoft.AspNetCore.Server.IIS.Core.IISHttpContextOfT`1.ProcessRequestAsync()
</Data>
        </EventData>
    </Event>
</Events>
