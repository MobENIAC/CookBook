public class AppConfigTest: IAppConfig    
    {    
        public readonly string _testvalue = string.Empty;    
       
        public IConfiguration Configuration { get; }    
        public AppConfigTest(IConfiguration configuration)    
        {    
            Configuration = configuration;    
            _testvalue = Configuration["testKey"];    
        }    
    
        public string GetTestValue()    
        {    
            return _testvalue;    
        }    
    }    
public interface IAppConfig    
   {    
      string GetTestValue();    
   }     