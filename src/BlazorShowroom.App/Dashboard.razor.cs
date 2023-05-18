using Microsoft.AspNetCore.Components;

namespace BlazorShowroom.App;
public partial class Dashboard
{
    [Parameter]
    public required string Test { get; set; }

    protected override void OnInitialized()
    {
        Test = "12333";
    }
}
