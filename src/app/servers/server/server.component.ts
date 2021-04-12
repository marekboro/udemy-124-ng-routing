import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';


import { ServersService } from '../servers.service';
import { ServerResolver } from './server-resolver.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.route.data
      .subscribe(
        (data:Data) => {
          this.server = data['server'] // this ['name'] needs to match the name given in the resole on the PATH in the routingModule.
        }
      )
    // this.server = this.resolver.resolve(this.route, this.router)
    // const id = +this.route.snapshot.params['id']
    // // const id = parseInt(this.route.snapshot.params['id'],10)
    // this.server = this.serversService.getServer(id)
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // })

  }
  onEdit() {
    // const id = +this.route.snapshot.params['id'];    //!
    // this.router.navigate(['/servers',id,'edit']);    // ! this will work but there is a simpler way: 

    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }




}


